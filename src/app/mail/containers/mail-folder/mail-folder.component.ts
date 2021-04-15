import { Component } from '@angular/core';
import { Mail } from '../../models/mail';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.css']
})
export class MailFolderComponent{

  messages: Observable<Mail[]> = this.route.data.pipe(map(x => x.messages.filter(el => el !== undefined)));
  title: Observable<string> = this.route.params.pipe(pluck('name'));

  constructor(private route: ActivatedRoute) {}
}
