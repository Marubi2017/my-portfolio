import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { inject } from '@vercel/analytics';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';


// Initialize Vercel Analytics
inject();

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));
