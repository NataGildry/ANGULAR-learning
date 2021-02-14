import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent  {

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('B182'),
      code: new FormControl('1234')
    })
  })

  onSubmit(): void {
    console.log('Submit:', this.form.value);
  }

}
