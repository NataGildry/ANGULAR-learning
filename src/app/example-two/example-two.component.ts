import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-example-two',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
