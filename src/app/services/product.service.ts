import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'; // Importa tu modelo de producto

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';  // Cambia la URL según tu API

  constructor(private http: HttpClient) {}

  // Método para obtener un producto por ID
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  

  // Otros métodos como agregar productos al carrito, actualizar stock, etc. también pueden ser agregados aquí.
}
