import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'; // Modelo de producto

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';  // URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Obtener un producto por ID
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Actualizar un producto por ID
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  // Eliminar un producto por ID
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener el precio final de un producto por ID
  getFinalPrice(id: number): Observable<{ final_price: number }> {
    return this.http.get<{ final_price: number }>(`${this.apiUrl}/${id}/get_final_price`);
  }

  // Actualizar el stock de un producto por ID
  updateStock(id: number, stock: number): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${id}/update_stock`, { stock });
  }

  // Actualizar el descuento de un producto por ID
  updateDiscount(id: number, discount: number): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${id}/update_discount`, { discount });
  }

  // Obtener productos por marca
  getProductsByBrand(brand: string): Observable<Product[]> {
    const params = new HttpParams().set('brand', brand);
    return this.http.get<Product[]>(`${this.apiUrl}/get_by_brand`, { params });
  }

  // Obtener productos por nombre
  getProductsByName(name: string): Observable<Product[]> {
    const params = new HttpParams().set('name', name);
    return this.http.get<Product[]>(`${this.apiUrl}/get_by_name`, { params });
  }
}
