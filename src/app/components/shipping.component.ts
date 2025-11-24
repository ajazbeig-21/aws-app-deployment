import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Shipping <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">& Delivery</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn about our shipping and delivery process
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">

          <h2 class="text-2xl font-bold text-gray-900 mb-4">Shipping & Delivery Policy</h2>
          <p class="text-gray-600 mb-6">
            <strong>Last updated on Nov 24 2025</strong>
          </p>

          <p class="text-gray-600 mb-6">
            For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. <strong>AJAZ ARIF BEIG</strong> is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 8788441933 or programmingwithajaz&#64;gmail.com
          </p>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .prose {
      color: #374151;
    }
    .prose h2 {
      color: #111827;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    .prose p {
      margin-bottom: 1rem;
      line-height: 1.75;
    }
    .prose ul {
      margin-bottom: 1rem;
    }
    .prose li {
      margin-bottom: 0.5rem;
    }
  `]
})
export class ShippingComponent implements OnInit {
  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData({
      title: 'Shipping & Delivery Policy | Ajaz Beig',
      description: 'Learn about our shipping and delivery policy for international and domestic orders. Orders shipped within 0-7 days through registered courier services.',
      keywords: 'shipping policy, delivery policy, courier services, international shipping, domestic delivery',
      image: '/assets/images/og-shipping.jpg',
      url: '/shipping',
      type: 'website'
    });
  }
}