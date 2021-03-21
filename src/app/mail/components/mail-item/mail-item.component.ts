import { Component, Input, OnInit } from '@angular/core';
import { Mail } from '../../models/mail';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  @Input()
  message: Mail;

  constructor() { }

  ngOnInit(): void {
  }

}
