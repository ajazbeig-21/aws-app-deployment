import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p class="text-lg text-gray-600">
            Last updated: {{ lastUpdated }}
          </p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-xl shadow-lg p-8 lg:p-12 prose prose-lg max-w-none">
          
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              These Terms and Conditions govern your use of this website and the purchase of any digital products or services offered by Ajaz Beig.
            </p>
            <p class="text-gray-700 leading-relaxed">
              If you do not agree with any of these terms, you are prohibited from using or accessing this site. 
              The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Digital Products and Services</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.1 Product Delivery</h3>
                <p class="text-gray-700 leading-relaxed">
                  All digital products (courses, templates, code snippets, etc.) are delivered electronically via email or download links. 
                  Delivery typically occurs within 24 hours of payment confirmation.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.2 License Grant</h3>
                <p class="text-gray-700 leading-relaxed">
                  Upon purchase, you receive a non-exclusive, non-transferable license to use the digital products for personal or commercial use 
                  as specified in the individual product documentation. You may not resell, redistribute, or share the products with third parties.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.3 Service Availability</h3>
                <p class="text-gray-700 leading-relaxed">
                  Consulting and development services are provided based on availability and project requirements. 
                  Service agreements will include specific terms, deliverables, and timelines.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Payments and Pricing</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3.1 Pricing</h3>
                <p class="text-gray-700 leading-relaxed">
                  All prices are listed in USD and are subject to change without notice. 
                  Current pricing is displayed on the product pages and is valid at the time of purchase.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3.2 Payment Processing</h3>
                <p class="text-gray-700 leading-relaxed">
                  Payments are processed through secure third-party payment processors (Stripe, PayPal, etc.). 
                  We do not store your payment information on our servers.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3.3 Taxes</h3>
                <p class="text-gray-700 leading-relaxed">
                  You are responsible for any applicable taxes, duties, or fees related to your purchase based on your location.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, 
              and software, is the property of Ajaz Beig or its content suppliers and is protected by international copyright laws.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              The compilation of all content on this site is the exclusive property of Ajaz Beig and is protected by copyright laws. 
              All software used on this site is the property of Ajaz Beig or its software suppliers and is protected by copyright laws.
            </p>
            <p class="text-gray-700 leading-relaxed">
              You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the service, use of the service, 
              or access to the service without express written permission.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">5. User Accounts and Security</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">5.1 Account Creation</h3>
                <p class="text-gray-700 leading-relaxed">
                  To access certain features or make purchases, you may need to create an account. 
                  You are responsible for maintaining the confidentiality of your account credentials.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">5.2 Accurate Information</h3>
                <p class="text-gray-700 leading-relaxed">
                  You agree to provide accurate, current, and complete information during registration and to update such information 
                  as necessary to maintain its accuracy.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">5.3 Account Security</h3>
                <p class="text-gray-700 leading-relaxed">
                  You are responsible for all activities that occur under your account. 
                  Please notify us immediately of any unauthorized use of your account.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
            <p class="text-gray-700 leading-relaxed mb-4">You may not use our products or services:</p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>For any obscene or immoral purpose</li>
              <li>To interfere with or circumvent the security features of the service or any related website</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers and Limitation of Liability</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">7.1 Disclaimer of Warranties</h3>
                <p class="text-gray-700 leading-relaxed">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                  this Company excludes all representations, warranties, conditions and terms.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">7.2 Limitation of Liability</h3>
                <p class="text-gray-700 leading-relaxed">
                  In no event shall Ajaz Beig, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, punitive, consequential, or similar damages.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
            <p class="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Ajaz Beig and our subsidiaries, affiliates, and all of our respective officers, 
              agents, partners, and employees, from and against any loss, damage, liability, claim, or demand.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
              under our sole discretion, for any reason whatsoever and without limitation.
            </p>
            <p class="text-gray-700 leading-relaxed">
              If you wish to terminate your account, you may simply discontinue using the service.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p class="text-gray-700 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of India. 
              If any provision of these Terms is held to be invalid or unenforceable by a court, 
              the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p class="text-gray-700 leading-relaxed">
              What constitutes a material change will be determined at our sole discretion. 
              By continuing to access or use our service after any revisions become effective, 
              you agree to be bound by the revised terms.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-gray-700"><strong>Email:</strong> ajazbeig200&#64;gmail.com</p>
              <p class="text-gray-700"><strong>Website:</strong> www.ajazbeig.in</p>
              <p class="text-gray-700"><strong>Response Time:</strong> Within 48 hours</p>
            </div>
          </section>

          <div class="border-t pt-6 mt-8 text-center text-gray-500">
            <p>This document was last updated on {{ lastUpdated }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TermsComponent implements OnInit {
  lastUpdated = 'November 9, 2025';

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getTermsSEO());
  }
}