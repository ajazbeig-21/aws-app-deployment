import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed w-full top-0 z-50 transition-all duration-300"
         [ngStyle]="scrolled ? {'background': 'rgba(13,13,20,0.95)', 'backdrop-filter': 'blur(16px)', 'border-bottom': '1px solid rgba(137,119,254,0.2)'} : {'background': 'transparent'}">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a routerLink="/" class="flex items-center gap-2">
            <span class="terminal-text text-lg font-bold" style="color:#fd974d">~/</span>
            <span class="font-bold text-xl text-white">ajaz_beig</span>
          </a>
          <div class="hidden md:flex items-center gap-8">
            <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:true}"
               class="nav-link text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">Home</a>
            <a routerLink="/portfolio" routerLinkActive="active-link"
               class="nav-link text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">Projects</a>
            <a routerLink="/contact" routerLinkActive="active-link"
               class="nav-link text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">Contact</a>
          </div>
          <div class="hidden md:block">
            <a href="https://topmate.io/techworld_with_ajaz" target="_blank" rel="noopener noreferrer"
               class="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 inline-block"
               style="background: linear-gradient(135deg, #fd974d, #8977fe); box-shadow: 0 0 20px rgba(137,119,254,0.3)">
              Book a Call
            </a>
          </div>
          <button (click)="toggleMobileMenu()" class="md:hidden text-slate-300 hover:text-white p-2">
            <svg class="h-6 w-6" [class.hidden]="isMobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg class="h-6 w-6" [class.hidden]="!isMobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="md:hidden" [class.hidden]="!isMobileMenuOpen"
           style="background: rgba(13,13,20,0.98); border-top: 1px solid rgba(137,119,254,0.2)">
        <div class="px-4 py-4 space-y-2">
          <a routerLink="/" (click)="closeMobileMenu()" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active-link-mobile"
             class="block text-slate-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-colors">Home</a>
          <a routerLink="/portfolio" (click)="closeMobileMenu()" routerLinkActive="active-link-mobile"
             class="block text-slate-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-colors">Projects</a>
          <a routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="active-link-mobile"
             class="block text-slate-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-colors">Contact</a>
          <a href="https://topmate.io/techworld_with_ajaz" target="_blank" rel="noopener noreferrer" (click)="closeMobileMenu()"
             class="block text-center px-4 py-2 rounded-lg text-sm font-semibold text-white"
             style="background: linear-gradient(135deg, #fd974d, #8977fe)">Book a Call</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link { position: relative; }
    .nav-link::after {
      content: ''; position: absolute;
      bottom: -4px; left: 0; width: 0; height: 2px;
      background: linear-gradient(90deg, #fd974d, #8977fe);
      transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }
    .active-link { color: #fd974d !important; }
    .active-link-mobile { color: #fd974d !important; }
  `]
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  scrolled = false;

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled = window.scrollY > 20; }

  toggleMobileMenu(): void { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
  closeMobileMenu(): void { this.isMobileMenuOpen = false; }
}
