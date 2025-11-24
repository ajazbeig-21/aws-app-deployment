import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Refund Policy
          </h1>
          <p class="text-lg text-gray-600">
            Last updated: {{ lastUpdated }}
          </p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-xl shadow-lg p-8 lg:p-12 prose prose-lg max-w-none">
          
          <h1 class="text-3xl font-bold text-gray-900 mb-6 text-center">Cancellation & Refund Policy</h1>
          <p class="text-gray-600 mb-8 text-center">Last updated on Nov 24 2025</p>

          <div class="space-y-6 text-gray-700 leading-relaxed">
            
            <p>
              <strong>AJAZ ARIF BEIG</strong> believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
            </p>

            <p>
              Cancellations will be considered only if the request is made within <strong>Not Applicable</strong> of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
            </p>

            <p>
              <strong>AJAZ ARIF BEIG</strong> does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
            </p>

            <p>
              In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within <strong>Not Applicable</strong> of receipt of the products.
            </p>

            <p>
              In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within <strong>Not Applicable</strong> of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
            </p>

            <p>
              In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
            </p>

            <p>
              In case of any Refunds approved by the <strong>AJAZ ARIF BEIG</strong>, it'll take <strong>Not Applicable</strong> for the refund to be processed to the end customer.
            </p>

          </div>

          <div class="border-t pt-6 mt-8 text-center text-gray-500">
            <p>This document was last updated on Nov 24 2025</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class RefundComponent implements OnInit {
  lastUpdated = 'Nov 24 2025';

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getRefundSEO());
  }
}