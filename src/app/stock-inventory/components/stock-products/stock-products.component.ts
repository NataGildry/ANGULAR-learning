import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent {
  @Input()
  parent: FormGroup;

  @Input()
  map: Product[];

  @Output()
  removed = new EventEmitter<any>();

  get stocks(): AbstractControl[] {
    return (this.parent.get('stock') as FormArray).controls;
  }
  onRemove(group, index): void {
    this.removed.emit({ group, index });
  }
}
