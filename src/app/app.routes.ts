import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ServicesComponent } from './features/services/services';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', loadComponent: () => import('./features/portfolio/portfolio').then(m => m.PortfolioComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent) },
  { path: 'blog', loadComponent: () => import('./features/blog/blog').then(m => m.BlogComponent) },
  { path: 'privacy-policy', loadComponent: () => import('./features/privacy-policy/privacy-policy').then(m => m.PrivacyPolicyComponent) },
  { path: 'terms-of-service', loadComponent: () => import('./features/terms-of-service/terms-of-service').then(m => m.TermsOfServiceComponent) },
  { path: '**', redirectTo: '' }
];
