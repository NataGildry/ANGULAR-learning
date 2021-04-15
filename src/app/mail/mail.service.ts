import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from './models/mail';
import { map } from 'rxjs/operators';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) {
  }

  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get('assets/messages.json').pipe(map(data => {
      const key = 'messages';
      const messageList = data[key];
      return messageList.map((mes: any) => {
        if (folder === mes.folder) {
          return {
            folder: mes.folder,
            from: mes.from,
            id: mes.id,
            summary: mes.summary,
            timestamp: mes.timestamp
          };
        }
      });
    }));
  }
}
