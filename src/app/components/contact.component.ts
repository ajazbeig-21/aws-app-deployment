import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Contact <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Last updated on Nov 24 2025
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-50 rounded-xl p-8 lg:p-12">
          
          <p class="text-lg text-gray-700 mb-8 leading-relaxed">
            You may contact us using the information below:
          </p>

          <div class="space-y-6">
            
            <div class="bg-white p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Merchant Legal entity name:</h3>
              <p class="text-gray-700">AJAZ ARIF BEIG</p>
            </div>

            <div class="bg-white p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Registered Address:</h3>
              <p class="text-gray-700">BEIG MANZIL, SR no 140/4k/1, shambhuraje colony 3, Chakrapani Vasahat Rd, Sainath Nagar, Bhosari Pune MAHARASHTRA 411039</p>
            </div>

            <div class="bg-white p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Operational Address:</h3>
              <p class="text-gray-700">BEIG MANZIL, SR no 140/4k/1, shambhuraje colony 3, Chakrapani Vasahat Rd, Sainath Nagar, Bhosari Pune MAHARASHTRA 411039</p>
            </div>

            <div class="bg-white p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Telephone No:</h3>
              <p class="text-gray-700">8788441933</p>
            </div>

            <div class="bg-white p-6 rounded-lg border border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">E-Mail ID:</h3>
              <p class="text-gray-700">programmingwithajaz&#64;gmail.com</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getContactSEO());
  }
}