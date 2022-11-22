import { Component, OnInit } from '@angular/core';
import { products } from '../Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will get notified if product goes on sale!');
  }

  ngOnInit(): void {}
}
