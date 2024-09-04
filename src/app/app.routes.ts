import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Importa el componente
import { ProductListComponent } from './product-list/product-list.component'; // Importa el componente
import { LandingPageComponent } from './landing-page/landing-page.component'; // Importa el componente


export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Ruta para la página de inicio
    { path: 'product', component: ProductDetailComponent },  // Ruta para los detalles del producto
    { path: 'productList', component: ProductListComponent },  // Ruta para los detalles del producto
    { path: 'product/:id', component: ProductDetailComponent },
];
