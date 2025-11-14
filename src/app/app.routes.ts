import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
// TODO: PORTFOLIO - Uncomment when ready to add portfolio section
// import { PortfolioComponent } from './components/portfolio.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ContactComponent } from './components/contact.component';
import { TermsComponent } from './components/terms.component';
import { PrivacyComponent } from './components/privacy.component';
import { RefundComponent } from './components/refund.component';
import { ShippingComponent } from './components/shipping.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },                     // Home page
  // TODO: PORTFOLIO - Uncomment when ready to add portfolio section
  // { path: 'portfolio', component: PortfolioComponent },      // Portfolio showcase
  { path: 'products', component: ProductsListComponent },    // Digital products listing
  { path: 'product/:id', component: ProductDetailComponent }, // Individual product details
  { path: 'contact', component: ContactComponent },          // Contact form
  { path: 'terms', component: TermsComponent },              // Terms & Conditions
  { path: 'privacy', component: PrivacyComponent },          // Privacy Policy
  { path: 'refund', component: RefundComponent },            // Refund Policy
  { path: 'shipping', component: ShippingComponent },        // Shipping Policy
  { path: '**', redirectTo: '' }                             // Redirect unknown routes to home
];
