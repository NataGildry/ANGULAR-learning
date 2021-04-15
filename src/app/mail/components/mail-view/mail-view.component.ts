import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../../models/mail';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent {

  message: Observable<Mail> = this.route.data.pipe(map(x => x.message[0]));

  constructor(private route: ActivatedRoute) { }
}
