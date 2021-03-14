import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Product} from '../../models/product';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent {

  @Input()
  parent: FormGroup;
  @Input()
  products: Product[];
  @Output()
  added = new EventEmitter<any>();

  onAdd(): void {
    this.added.emit(this.parent.get('selector').value);
    this.parent.get('selector').reset({
      product_id: '',
      quantity: 10
    });
  }
}
