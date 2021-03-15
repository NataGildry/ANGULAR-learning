import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.css']
})
export class StockBranchComponent {
  @Input()
  parent: FormGroup;
  required(name: string) {
    return (
      this.parent.get(`store.${name}`).hasError('required') &&
      this.parent.get(`store.${name}`).touched
    );
  }
}
