import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SEOService } from '../services/seo.service';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  features: string[];
  downloadCount: number;
  rating: number;
  image: string;
  isPopular?: boolean;
  difficulty?: string;
  format: string;
  lastUpdated: string;
}

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Digital <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">eBooks</span>
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
          Premium interview preparation guides delivered directly to your email
        </p>
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <div class="flex items-center justify-center gap-2 text-blue-700">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span class="font-medium">📧 Delivered to your email within 1 hour of purchase</span>
          </div>
        </div>
        <div class="flex justify-center items-center gap-8 text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span>Email Delivery</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            <span>Lifetime Updates</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TODO: FILTERS - Add category filters when more products are available -->
    <!-- <section class="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4 py-4">
          Filter buttons here...
        </div>
      </div>
    </section> -->

    <!-- Products Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Available Products -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Available Products</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div *ngFor="let product of availableProducts" 
                 class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-green-200">
              
              <!-- Product Image -->
              <div class="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <div class="absolute top-4 left-4">
                  <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ✅ Available
                  </span>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <p class="text-gray-600 font-medium">{{ product.category }}</p>
                  </div>
                </div>
              </div>

              <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {{ product.category }}
                  </span>
                  <div class="flex items-center text-yellow-400">
                    <span class="text-sm font-medium text-gray-600 mr-1">{{ product.rating }}</span>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ product.name }}</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">{{ product.description }}</p>

                <div class="mb-6">
                  <h4 class="font-semibold text-gray-900 mb-2">What's included:</h4>
                  <ul class="space-y-2">
                    <li *ngFor="let feature of product.features.slice(0, 3)" 
                        class="flex items-center text-sm text-gray-600">
                      <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center gap-2">
                    <span class="text-3xl font-bold text-gray-900">₹{{ product.price / 100 }}</span>
                    <span *ngIf="product.originalPrice" class="text-lg text-gray-500 line-through">₹{{ product.originalPrice / 100 }}</span>
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ product.downloadCount }}+ downloads
                  </div>
                </div>

                <div class="flex gap-3">
                  <!-- <button (click)="viewProduct(product.id)" 
                           class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    View Details
                  </button> -->
                  <button 
                          class="flex-1 bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Coming Soon...
                  </button>
                  <button class="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-lg font-semibold transition-colors duration-200">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Coming Soon Products -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Coming Soon</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let product of comingSoonProducts" 
                 class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 opacity-75 relative">
              
              <!-- Product Image -->
              <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <!-- Coming Soon Overlay -->
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span class="bg-orange-500 text-white px-4 py-2 rounded-lg text-lg font-bold">
                    Coming Soon
                  </span>
                </div>
                <div class="absolute top-4 left-4">
                  <span class="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Upcoming
                  </span>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <p class="text-xs text-gray-500">{{ product.format }}</p>
                  </div>
                </div>
              </div>

              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {{ product.category }}
                  </span>
                  <div class="flex items-center text-yellow-400">
                    <span class="text-xs font-medium text-gray-500 mr-1">{{ product.rating }}</span>
                    <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  </div>
                </div>

                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ product.name }}</h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{{ product.description }}</p>

                <div class="mb-4">
                  <div class="flex flex-wrap gap-1">
                    <span *ngFor="let feature of product.features.slice(0, 2)" 
                          class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {{ feature }}
                    </span>
                    <span *ngIf="product.features.length > 2" 
                          class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{{ product.features.length - 2 }} more
                    </span>
                  </div>
                </div>

                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-1">
                    <span class="text-xl font-bold text-gray-900">₹{{ product.price / 100 }}</span>
                    <span *ngIf="product.originalPrice" class="text-sm text-gray-500 line-through">₹{{ product.originalPrice / 100 }}</span>
                  </div>
                  <div class="text-xs text-gray-500">
                    {{ product.downloadCount }}+ downloads
                  </div>
                </div>

                <div class="space-y-2">
                  <button disabled
                          class="w-full bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-semibold cursor-not-allowed">
                    Coming Soon
                  </button>
                  <div class="flex gap-2">
                    <button disabled class="flex-1 border border-gray-300 text-gray-400 px-3 py-1 rounded text-xs font-medium cursor-not-allowed">
                      Preview
                    </button>
                    <button disabled class="flex-1 border border-gray-300 text-gray-400 px-3 py-1 rounded text-xs font-medium cursor-not-allowed">
                      Notify Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State for Available Products -->
        <div *ngIf="availableProducts.length === 0" class="text-center py-12">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293L12 18.414l-2.707-2.707A1 1 0 008.586 15H6"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No products available yet</h3>
          <p class="text-gray-600">Check back soon for new digital products and resources.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Need Something Custom?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Looking for a specific solution or want a custom development project? Let's discuss your requirements.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
            Request Custom Work
          </button>
          <button class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Browse Portfolio
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class ProductsListComponent implements OnInit {
  searchQuery: string = '';

  // Available Products (Currently only 2)
  availableProducts: Product[] = [
    {
      id: 2,
      name: 'Terraform Interview Preparation Guide',
      price: 39900,
      originalPrice: 59900,
      description: 'Master Terraform interviews with comprehensive questions, hands-on scenarios, and real-world infrastructure automation examples.',
      category: 'eBooks',
      features: [
        '30+ Terraform Interview Questions',
        'Infrastructure as Code Best Practices',
        'State Management Deep Dive',
        'Multi-Cloud Deployment Scenarios',
        'Terraform Modules & Providers',
        'Hands-on Lab Exercises',
        'Real-world Case Studies'
      ],
      downloadCount: 29,
      rating: 4.7,
      image: '/assets/images/products/terraform-guide.jpg',
      isPopular: false,
      difficulty: 'Intermediate to Advanced',
      format: 'PDF + Code Examples',
      lastUpdated: 'November 2025'
    }
  ];

  // Coming Soon Products
  comingSoonProducts: Product[] = [
    {
      id: 6,
      name: 'System Design Interview Prep For DevOps Engineers',
      price: 59900,
      originalPrice: 79900,
      description: 'Master system design interviews with detailed case studies, architectural patterns, and scalability concepts.',
      category: 'eBooks',
      features: [
        'System Design Fundamentals',
        '20+ Case Study Solutions',
        'Scalability Patterns',
        'Database Design Principles',
        'Microservices Architecture',
        'Interview Tips & Tricks'
      ],
      downloadCount: 0,
      rating: 0,
      image: '/assets/images/products/system-design.jpg',
      isPopular: false,
      difficulty: 'Advanced',
      format: 'PDF + Diagrams',
      lastUpdated: 'Coming Soon'
    }
  ];

  constructor(
    private router: Router,
    private seoService: SEOService
  ) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getProductsSEO());
  }

  // Search functionality for available products
  get searchResults(): Product[] {
    if (!this.searchQuery) return this.availableProducts;
    
    return this.availableProducts.filter((p: Product) =>
      p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Method to update search query
  updateSearchQuery(query: string): void {
    this.searchQuery = query;
  }

  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}
