import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail';
import { Observable } from 'rxjs';

@Injectable()
export class MailViewResolve implements Resolve<Mail> {
  constructor(private mailService: MailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Mail> {
    return this.mailService.getMessage(route.params.id);
  }
}
