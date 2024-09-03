import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-landing-page',
  
  standalone: true,
  imports: [RouterModule, HttpClientModule,ProductListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  

}
