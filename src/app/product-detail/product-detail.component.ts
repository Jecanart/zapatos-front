import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [CommonModule, FormsModule, CurrencyPipe]
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      // Convertir productId a número
      this.productService.getProduct(+productId).subscribe((data) => {
        this.product = data;
      });
    }
  }

  getPriceWithDiscount(product: Product): number {
    const discount = product.discount ?? 0;
    return product.product_price - (product.product_price * discount / 100);
  }

  addToCart(): void {
    // Método para manejar el evento de añadir al carrito
    console.log(`Producto añadido al carrito: ${this.product?.product_name}, Cantidad: ${this.quantity}`);
  }
}
