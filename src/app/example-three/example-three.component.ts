import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-three',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})
export class ExampleThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
