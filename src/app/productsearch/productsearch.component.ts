import { Component } from '@angular/core';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css'],
})
export class ProductsearchComponent {
  count: any[] = [];
  text: any;
  searchdata: any;
  getcount(data: any) {
    this.count = data;
  }
  getarray(data: any) {
    this.count = data;
  }
  filter(search: any) {
    this.searchdata = search;
  }
}
