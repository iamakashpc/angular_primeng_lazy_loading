import { Component } from '@angular/core';
import { Product, ProductResponse } from './product';
import { AppService } from './app.service';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lazy-prime';
  products: Product[] = [];
  totalRecords: number = 0;
  loading: boolean = true;

  constructor(private appService: AppService) {}

  loadProducts($event: TableLazyLoadEvent) {
    this.loading = true;
    console.log($event);
    this.appService
      .getProducts($event.first || 0)
      .subscribe((response: ProductResponse) => {
        this.loading = false;
        this.products = response.products;
        this.totalRecords = response.total;
        console.log(response);
      });
  }
}
