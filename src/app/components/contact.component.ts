import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? I'd love to hear from you and discuss how we can work together.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Send me a message</h2>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name">
                <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" 
                     class="text-red-500 text-sm mt-1">
                  Name is required
                </div>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com">
                <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                     class="text-red-500 text-sm mt-1">
                  <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
                  <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select 
                  id="subject" 
                  formControlName="subject"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                  <option value="">Select a subject</option>
                  <option value="project">New Project Inquiry</option>
                  <option value="consultation">Consultation Request</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
                <div *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched" 
                     class="text-red-500 text-sm mt-1">
                  Please select a subject
                </div>
              </div>

              <!-- Budget (Optional) -->
              <div>
                <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                  Project Budget (Optional)
                </label>
                <select 
                  id="budget" 
                  formControlName="budget"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and requirements..."></textarea>
                <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                     class="text-red-500 text-sm mt-1">
                  Message is required (minimum 10 characters)
                </div>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                [disabled]="contactForm.invalid || isSubmitting"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                <svg *ngIf="isSubmitting" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              </button>
            </form>

            <!-- Success Message -->
            <div *ngIf="showSuccessMessage" 
                 class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="font-medium">Message sent successfully!</span>
              </div>
              <p class="mt-1 text-sm">I'll get back to you within 24 hours.</p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            
            <!-- Contact Details -->
            <div class="bg-gray-50 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Email</h4>
                    <p class="text-gray-600">hello&#64;ajazbeig.com</p>
                    <p class="text-sm text-gray-500">I'll respond within 24 hours</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Location</h4>
                    <p class="text-gray-600">Kashmir, India</p>
                    <p class="text-sm text-gray-500">Available for remote work globally</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Response Time</h4>
                    <p class="text-gray-600">Within 24 hours</p>
                    <p class="text-sm text-gray-500">Monday to Friday, 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-gray-50 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Follow me</h3>
              
              <div class="grid grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/ajaz-beig-6b0402193/" target="_blank" rel="noopener noreferrer"
                   class="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200">
                  <img src="assets/images/socials/linkedin.png" alt="LinkedIn" class="h-8 w-8">
                  <div>
                    <div class="font-medium text-gray-900">LinkedIn</div>
                    <div class="text-sm text-gray-500">Connect</div>
                  </div>
                </a>

                <a href="https://github.com/ajazbeig-21/" target="_blank" rel="noopener noreferrer"
                   class="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200">
                  <img src="assets/images/socials/github.png" alt="GitHub" class="h-8 w-8">
                  <div>
                    <div class="font-medium text-gray-900">GitHub</div>
                    <div class="text-sm text-gray-500">Follow</div>
                  </div>
                </a>

                <a href="https://m.youtube.com/@ProgrammingWithAjaz" target="_blank" rel="noopener noreferrer"
                   class="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200">
                  <img src="assets/images/socials/youtube.png" alt="YouTube" class="h-8 w-8">
                  <div>
                    <div class="font-medium text-gray-900">YouTube</div>
                    <div class="text-sm text-gray-500">Subscribe</div>
                  </div>
                </a>

                <a href="https://ajaz-beig.medium.com/" target="_blank" rel="noopener noreferrer"
                   class="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200">
                  <img src="assets/images/socials/medium.png" alt="Medium" class="h-8 w-8">
                  <div>
                    <div class="font-medium text-gray-900">Medium</div>
                    <div class="text-sm text-gray-500">Read</div>
                  </div>
                </a>
              </div>
            </div>

            <!-- Quick FAQ -->
            <div class="bg-gray-50 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Quick FAQ</h3>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">How long does a typical project take?</h4>
                  <p class="text-sm text-gray-600">Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months.</p>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Do you work with international clients?</h4>
                  <p class="text-sm text-gray-600">Yes! I work with clients globally and am flexible with time zones for meetings and communication.</p>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">What's your preferred communication method?</h4>
                  <p class="text-sm text-gray-600">I prefer email for initial contact, then we can schedule video calls for detailed discussions. I also use Slack for ongoing project communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(
    private fb: FormBuilder,
    private seoService: SEOService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getContactSEO());
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Contact form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}