import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-app',
  templateUrl: './mail-app.component.html',
  styleUrls: ['./mail-app.component.css']
})
export class MailAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(event): void {
    console.log('Activate:', event);
  }
  onDeactivate(event): void {
    console.log('Deactivate:', event);
  }
}
