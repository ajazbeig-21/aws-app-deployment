import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list.component';
import { ProductDetailComponent } from './components/product-detail.component';

export const routes: Routes = [
     { path: '', component: ProductsListComponent },           // default route for product listing
  { path: 'product/:id', component: ProductDetailComponent } 
];
