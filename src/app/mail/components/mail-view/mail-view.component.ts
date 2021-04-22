import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../../models/mail';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit{
  reply = '';
  hasUnsavedChanges = false;

  message: Observable<Mail> = this.route.data.pipe(map(x => x.message[0]));

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.reply = '';
      this.hasUnsavedChanges = false;
    });
  }

  updateReply(value: string): void {
    this.reply = value;
    this.hasUnsavedChanges = true;
  }

  sendReply(): void {
    console.log('Sent!', this.reply);
    this.hasUnsavedChanges = false;
  }
}
