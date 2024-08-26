import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule si es necesario
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  selectedSize: number | null = null;

  selectSize(size: number) {
    this.selectedSize = size;
  }
}

