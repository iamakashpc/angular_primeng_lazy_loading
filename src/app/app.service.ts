import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from './product';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  // Fetch products with optional sorting and pagination
  getProducts(
    skip: number,
    sortField: string = '',
    sortOrder: string = ''
  ): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      `https://dummyjson.com/products?limit=10&skip=${skip}${sortField}${sortOrder}`
    );
  }
}
