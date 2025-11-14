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
          Shipping <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn about our digital product delivery process
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">

          <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div class="flex items-center">
              <svg class="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-blue-900">Digital Delivery Only</h3>
                <p class="text-blue-800">All our products are digital and delivered via email</p>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">Digital Product Delivery</h2>
          <p class="text-gray-600 mb-6">
            Since we exclusively sell digital products (eBooks, guides, and digital resources), there are no physical shipping costs or delays.
            All purchases are delivered instantly via email to ensure you receive your content immediately after payment.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">Delivery Process</h2>
          <div class="bg-gray-50 rounded-lg p-6 mb-6">
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Complete Purchase</h3>
                  <p class="text-gray-600">Make a secure payment through our checkout process</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Instant Processing</h3>
                  <p class="text-gray-600">Payment is processed and verified immediately</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Email Delivery</h3>
                  <p class="text-gray-600">Receive download links and product files via email within 5 minutes</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Access Your Content</h3>
                  <p class="text-gray-600">Download and start using your digital products immediately</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">Delivery Timeframes</h2>
          <ul class="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Standard Delivery:</strong> Within 5 minutes of successful payment</li>
            <li><strong>Email Issues:</strong> If you don't receive the email, check your spam folder or contact support</li>
            <li><strong>Multiple Products:</strong> All products in a single order are delivered together</li>
            <li><strong>International:</strong> Same delivery time regardless of location (digital delivery)</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">No Physical Shipping</h2>
          <p class="text-gray-600 mb-6">
            Unlike physical products, our digital offerings have several advantages:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <svg class="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="font-semibold text-green-900">Instant Access</h3>
              </div>
              <p class="text-green-800 text-sm">No waiting for postal delivery or shipping delays</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <svg class="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="font-semibold text-blue-900">No Extra Costs</h3>
              </div>
              <p class="text-blue-800 text-sm">No shipping fees, handling charges, or delivery costs</p>
            </div>
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <svg class="w-6 h-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0 1 1 0 012 0zm0 4a1 1 0 10-2 0 1 1 0 012 0zm0 4a1 1 0 10-2 0 1 1 0 012 0z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="font-semibold text-purple-900">Eco-Friendly</h3>
              </div>
              <p class="text-purple-800 text-sm">No physical packaging or environmental impact</p>
            </div>
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <svg class="w-6 h-6 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="font-semibold text-orange-900">Always Available</h3>
              </div>
              <p class="text-orange-800 text-sm">Access your purchases anytime, anywhere</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">Technical Requirements</h2>
          <p class="text-gray-600 mb-4">
            To access your digital products, you'll need:
          </p>
          <ul class="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>A valid email address to receive delivery</li>
            <li>Internet connection to download files</li>
            <li>PDF reader (Adobe Acrobat, browser, etc.) for eBooks</li>
            <li>Basic computer or mobile device for access</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p class="text-gray-600 mb-6">
            If you have any questions about our shipping policy or experience issues with delivery,
            please don't hesitate to <a routerLink="/contact" class="text-blue-600 hover:text-blue-800 font-medium">contact us</a>.
            We're here to help ensure you receive your digital products successfully.
          </p>

          <div class="bg-gray-50 border-l-4 border-gray-400 p-6">
            <p class="text-gray-700 italic">
              <strong>Last updated:</strong> November 2025
            </p>
          </div>

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
      title: 'Shipping Policy - Digital Product Delivery | Ajaz Beig',
      description: 'Learn about our digital product shipping policy. All products are delivered via email within 5 minutes of purchase. No physical shipping costs or delays.',
      keywords: 'shipping policy, digital delivery, ebook delivery, instant download, digital products',
      image: '/assets/images/og-shipping.jpg',
      url: '/shipping',
      type: 'website'
    });
  }
}