import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { StockValidators } from './stock-inventory.validators';
import { StockInventoryService } from '../services/stock-inventory.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {
  total: number;
  products: Product[];

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', [Validators.required, StockValidators.checkBranch]],
      code: ['', Validators.required]
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ])
  }, { validator: StockValidators.checkStockExists });

  constructor(private fb: FormBuilder, private stockService: StockInventoryService) {}
  ngOnInit(): void {
    this.form.get('stock')
      .valueChanges.subscribe(value => console.log(value));

    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    cart.pipe(map(item => this.addStock(item))).subscribe();
    products.pipe(map(i => i.map(el => this.products.push(el)))).subscribe();
  }

  createStock(stock): FormGroup {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  onSubmit(): void {
    console.log('Submit:', this.form.value);
  }

  addStock(stock): void {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }): void {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }
}
