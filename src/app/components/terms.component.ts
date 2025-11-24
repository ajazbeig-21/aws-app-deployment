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
          
          <h1 class="text-3xl font-bold text-gray-900 mb-6 text-center">Terms & Conditions</h1>
          <p class="text-gray-600 mb-8 text-center">Last updated on Nov 24 2025</p>

          <div class="space-y-6 text-gray-700 leading-relaxed">
            
            <p>
              For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean 
              <strong>AJAZ ARIF BEIG</strong>, whose registered/operational office is 
              <strong>BEIG MANZIL, SR no 140/4k/1, shambhuraje colony 3, Chakrapani Vasahat Rd, Sainath Nagar, Bhosari Pune MAHARASHTRA 411039</strong>. 
              "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
            </p>

            <p>
              Your use of the website and/or purchase from us are governed by following Terms and Conditions:
            </p>

            <p>
              The content of the pages of this website is subject to change without notice.
            </p>

            <p>
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </p>

            <p>
              Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.
            </p>

            <p>
              Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </p>

            <p>
              All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.
            </p>

            <p>
              Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
            </p>

            <p>
              From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.
            </p>

            <p>
              You may not create a link to our website from another website or document without <strong>AJAZ ARIF BEIG's</strong> prior written consent.
            </p>

            <p>
              Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.
            </p>

            <p>
              We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time
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
export class TermsComponent implements OnInit {
  lastUpdated = 'Nov 24 2025';

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getTermsSEO());
  }
}