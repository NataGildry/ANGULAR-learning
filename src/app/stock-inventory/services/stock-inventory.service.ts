import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';


@Injectable()
export class StockInventoryService {

  constructor(private http: HttpClient) { }

  getCartItems(): void {
    const req = new HttpRequest(
      'GET',
      'http://localhost:4200/assets/data.json',
      {
        reportProgress: true
      }
    );

    this.http
      .request(req)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Sent');
            break;
          case HttpEventType.DownloadProgress:
            console.log(
              `Downloading: ${event.loaded / 1024}Kb`
            );
            break;
          case HttpEventType.Response:
            console.log('Finished', event.body);
        }
      });
  }
  getProducts(): void {
    const req = new HttpRequest(
      'GET',
      'http://localhost:4200/assets/products.json',
      {
        reportProgress: true
      }
    );
    this.http
      .request(req)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Sent');
            break;
          case HttpEventType.DownloadProgress:
            console.log(
              `Downloading: ${event.loaded / 1024}Kb`
            );
            break;
          case HttpEventType.Response:
            console.log('Finished', event.body);
        }
      }
      );
  }
}
