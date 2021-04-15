import { Component, Input } from '@angular/core';
import { Mail } from '../../models/mail';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent {

  @Input()
  message: Mail;

  constructor(private router: Router) { }

  navigateToMessage(): void {
    this.router.navigate(
      ['/mail', {outlets: {pane: ['message', this.message.id]}}]
    );
   }

}
