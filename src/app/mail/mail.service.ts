import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {

  private myData: any;


  constructor(private http: HttpClient) { }
    getFolder(folder: string): Promise<void> {
    return this.http
      .get(`/assets/db.json`)
          .toPromise()
          .then(data => {
            this.myData = data;
          });
  }
}
