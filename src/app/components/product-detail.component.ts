import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaymentFormComponent } from './payment-form.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, PaymentFormComponent],
  template: `
    <div *ngIf="product">
      <h2>{{ product.name }}</h2>
      <p>Price: ₹{{ product.price / 100 }}</p>
      <p>Lorem ipsum product description here...</p>
      <button (click)="showPaymentForm = true">Buy Now</button>
    </div>

    <app-payment-form 
      *ngIf="showPaymentForm" 
      [product]="product" 
      (close)="showPaymentForm = false">
    </app-payment-form>
  `
})
export class ProductDetailComponent {
  product: any = null;
  showPaymentForm = false;

  constructor(private route: ActivatedRoute) {
    const productId = this.route.snapshot.params['id'];
    this.product = this.getProductById(productId);
  }

  getProductById(id: number) {
    const products = [
      { id: 1, name: 'DevOps Interview eBook', price: 49900 },
      { id: 2, name: 'DSA Roadmap PDF', price: 34900 },
      // ...8 more products
    ];
    return products.find(p => p.id == id);
  }
}
