import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item, Product } from '../models/product';

@Injectable()
export class StockInventoryService {
  constructor(
    private http: HttpClient
  ) {}

  getCartItems(): Observable<Item[]> {
    return this.http
    .get('assets/data.json').pipe(map(data => {
        const key = 'cart';
        const cartList = data[key];
        return cartList.map((i: any) => {
          return {
            product_id: i.product_id,
            quantity: i.quantity
          };
        });
      }));
  }

  getProducts(): Observable<Product[]> {
      return this.http
      .get('assets/data.json').pipe(map(data => {
          const key = 'products';
          const productList = data[key];
          return productList.map((p: any) => {
            return {
              id: p.id,
              price: p.price,
              name: p.name
            };
          });
        }));
    }
}
