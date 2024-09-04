import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, HttpClientModule, FormsModule],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentPage = 1;
  productsPerPage = 18;
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.onSearchChange(); // Inicializa el filtro al cargar productos
      },
      (error) => {
        console.error('Error al cargar los productos', error);
      }
    );
  }

  onSearchChange(): void {
    // Este método actualiza la lista de productos filtrados
    this.currentPage = 1; // Resetea a la primera página
  }

  get filteredProducts(): Product[] {
    return this.products.filter(product => 
      product.product_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.productsPerPage);
  }

  nextPage(): void {
    if ((this.currentPage * this.productsPerPage) < this.filteredProducts.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getPriceWithDiscount(product: Product): number {
    const discount = product.discount ?? 0;
    return product.product_price - (product.product_price * discount / 100);
  }
}

