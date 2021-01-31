import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExampleOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
