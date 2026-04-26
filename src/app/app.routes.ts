import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { PortfolioComponent } from './components/portfolio.component';
import { ContactComponent } from './components/contact.component';
import { TermsComponent } from './components/terms.component';
import { PrivacyComponent } from './components/privacy.component';
import { RefundComponent } from './components/refund.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'refund', component: RefundComponent },
  { path: '**', redirectTo: '' }
];
