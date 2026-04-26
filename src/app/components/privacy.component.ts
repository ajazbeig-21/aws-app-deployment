import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p class="text-lg text-gray-600">
            Last updated: {{ lastUpdated }}
          </p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-xl shadow-lg p-8 lg:p-12 prose prose-lg max-w-none">
          
          <h1 class="text-3xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>
          <p class="text-gray-600 mb-8 text-center">Last updated on Nov 24 2025</p>

          <div class="space-y-6 text-gray-700 leading-relaxed">
            
            <p>
              This privacy policy sets out how <strong>AJAZ ARIF BEIG</strong> uses and protects any information that you give <strong>AJAZ ARIF BEIG</strong> when you visit their website and/or agree to purchase from them.
            </p>

            <p>
              <strong>AJAZ ARIF BEIG</strong> is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.
            </p>

            <p>
              <strong>AJAZ ARIF BEIG</strong> may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">We may collect the following information:</h2>
            <ul class="list-disc list-inside space-y-2 ml-6">
              <li>Name</li>
              <li>Contact information including email address</li>
              <li>Demographic information such as postcode, preferences and interests, if required</li>
              <li>Other information relevant to customer surveys and/or offers</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">What we do with the information we gather</h2>
            <p>
              We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-6">
              <li>Internal record keeping.</li>
              <li>We may use the information to improve our products and services.</li>
              <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
              <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">Security</h2>
            <p>
              We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">How we use cookies</h2>
            <p>
              A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
            </p>
            <p>
              We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
            </p>
            <p>
              Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
            </p>
            <p>
              You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">Controlling your personal information</h2>
            <p>
              You may choose to restrict the collection or use of your personal information in the following ways:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-6">
              <li>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
              <li>if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at programmingwithajaz&#64;gmail.com</li>
            </ul>

            <p>
              We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
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
export class PrivacyComponent implements OnInit {
  lastUpdated = 'Nov 24 2025';

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getPrivacySEO());
  }
}