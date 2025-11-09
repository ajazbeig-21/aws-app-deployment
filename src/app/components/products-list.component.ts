import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-grid">
      <div class="product-card" *ngFor="let product of products">
        <h3>{{ product.name }}</h3>
        <p>Price: ₹{{ product.price / 100 }}</p>
        <button (click)="viewProduct(product.id)">Know More</button>
      </div>
    </div>
  `,
  styles: [`
    .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .product-card { padding: 20px; border: 1px solid #ccc; border-radius: 8px; text-align: center; }
  `]
})
export class ProductsListComponent {
  products = [
    { id: 1, name: 'DevOps Interview eBook', price: 49900 },
    { id: 2, name: 'DSA Roadmap PDF', price: 34900 },
    // ...8 more products
  ];

  constructor(private router: Router) {}

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
}
