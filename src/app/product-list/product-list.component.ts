import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, HttpClientModule],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentPage = 1;
  productsPerPage = 20;

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

  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    return this.products.slice(startIndex, startIndex + this.productsPerPage);
  }

  nextPage(): void {
    if ((this.currentPage * this.productsPerPage) < this.products.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getPriceWithDiscount(product: Product): number {
    // Asegúrate de que discount esté definido y sea un número antes de realizar el cálculo
    const discount = product.discount ?? 0;
    return product.product_price - (product.product_price * discount / 100);
  }
}
