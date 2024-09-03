import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,HttpClientModule],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al cargar los productos', error);
      }
    );
  }
}

