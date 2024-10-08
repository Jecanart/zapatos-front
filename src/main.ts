import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Provisión de HttpClient
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideHttpClient() // Proveer HttpClient globalmente
    ], // Configurar el enrutamiento usando provideRouter
  
}).catch((err) => console.error(err));
