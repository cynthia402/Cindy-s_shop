import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: string;
  image: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(data => {
      this.products = data;
    });
  }
}
