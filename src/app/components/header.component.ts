import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a routerLink="/" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ajaz Beig
              </span>
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a routerLink="/" routerLinkActive="text-blue-600 border-b-2 border-blue-600" 
                 [routerLinkActiveOptions]="{exact: true}"
                 class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <!-- TODO: PORTFOLIO - Uncomment when ready to add portfolio section -->
              <!-- <a routerLink="/portfolio" routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                 class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Portfolio
              </a> -->
              <a routerLink="/products" routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                 class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Products
              </a>
              <a routerLink="/contact" routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                 class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <a routerLink="/contact" 
               class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
              Get In Touch
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" 
                    class="text-gray-700 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors">
              <svg class="h-6 w-6" [class.hidden]="isMobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6" [class.hidden]="!isMobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a routerLink="/" (click)="closeMobileMenu()" 
             routerLinkActive="bg-blue-50 text-blue-600" 
             [routerLinkActiveOptions]="{exact: true}"
             class="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Home
          </a>
          <!-- TODO: PORTFOLIO - Uncomment when ready to add portfolio section -->
          <!-- <a routerLink="/portfolio" (click)="closeMobileMenu()" 
             routerLinkActive="bg-blue-50 text-blue-600"
             class="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Portfolio
          </a> -->
          <a routerLink="/products" (click)="closeMobileMenu()" 
             routerLinkActive="bg-blue-50 text-blue-600"
             class="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Products
          </a>
          <a routerLink="/contact" (click)="closeMobileMenu()" 
             routerLinkActive="bg-blue-50 text-blue-600"
             class="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
            Contact
          </a>
          <div class="px-3 py-2">
            <a routerLink="/contact" (click)="closeMobileMenu()"
               class="bg-blue-600 hover:bg-blue-700 text-white block w-full text-center px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 shadow-md">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;

  ngOnInit(): void {
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}