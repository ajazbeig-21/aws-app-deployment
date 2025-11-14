import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="col-span-1 lg:col-span-2">
            <div class="mb-4">
              <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ajaz Beig
              </span>
            </div>
            <p class="text-gray-300 mb-6 max-w-md">
              Software Engineer specializing in DevOps and SRE, crafting robust infrastructures and scalable solutions.
              Passionate about cloud technologies and automation.
            </p>
            <!-- Social Links -->
            <div class="flex space-x-4">
              <a href="https://www.linkedin.com/in/ajaz-beig-6b0402193/" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/ajazbeig-21/" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://m.youtube.com/@TechWithAjaz" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://ajaz-beig.medium.com/" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a routerLink="/" class="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <!-- TODO: PORTFOLIO - Uncomment when ready to add portfolio section -->
              <!-- <li><a routerLink="/portfolio" class="text-gray-300 hover:text-white transition-colors duration-200">Portfolio</a></li> -->
              <li><a routerLink="/products" class="text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a routerLink="/contact" class="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <!-- Legal & Policies -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a routerLink="/terms" class="text-gray-300 hover:text-white transition-colors duration-200">Terms & Conditions</a></li>
              <li><a routerLink="/privacy" class="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a routerLink="/refund" class="text-gray-300 hover:text-white transition-colors duration-200">Refund Policy</a></li>
              <li><a routerLink="/shipping" class="text-gray-300 hover:text-white transition-colors duration-200">Shipping Policy</a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="mt-12 pt-8 border-t border-gray-800">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-lg font-semibold mb-2">Stay Updated</h3>
              <p class="text-gray-300">Get the latest updates on new projects and digital products.</p>
            </div>
            <div>
              <form (ngSubmit)="onSubmitNewsletter()" class="flex flex-col sm:flex-row gap-2">
                <input type="email" 
                       [(ngModel)]="newsletterEmail" 
                       name="newsletterEmail"
                       placeholder="Enter your email" 
                       class="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <button type="submit" 
                        class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-8 pt-8 border-t border-gray-800 text-center">
          <p class="text-gray-400">
            © {{ currentYear }} Ajaz Beig. All rights reserved. Built with Angular & TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  newsletterEmail = '';
  currentYear = new Date().getFullYear();

  onSubmitNewsletter(): void {
    if (this.newsletterEmail) {
      // Here you would typically integrate with a newsletter service
      console.log('Newsletter signup:', this.newsletterEmail);
      alert('Thank you for subscribing! (Integration pending)');
      this.newsletterEmail = '';
    }
  }
}