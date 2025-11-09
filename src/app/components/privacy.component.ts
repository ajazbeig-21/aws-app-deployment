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
          
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy describes how Ajaz Beig ("we," "our," or "us") collects, uses, and shares your personal information 
              when you visit or make a purchase from our website (the "Service") operated by Ajaz Beig.
            </p>
            <p class="text-gray-700 leading-relaxed">
              We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.1 Information You Provide</h3>
                <p class="text-gray-700 leading-relaxed mb-2">We collect information you provide directly to us, such as when you:</p>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Create an account or profile</li>
                  <li>Make a purchase or request services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through forms, email, or social media</li>
                  <li>Participate in surveys, contests, or promotions</li>
                  <li>Leave reviews or testimonials</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.2 Information Collected Automatically</h3>
                <p class="text-gray-700 leading-relaxed mb-2">When you visit our website, we automatically collect certain information about your device, including:</p>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>IP address and geographic location</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referring website or source</li>
                  <li>Date and time of access</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.3 Cookies and Similar Technologies</h3>
                <p class="text-gray-700 leading-relaxed">
                  We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. 
                  You can control cookies through your browser settings, but disabling cookies may affect website functionality.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p class="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send transaction-related communications</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send you marketing communications about products, services, and promotions (with your consent)</li>
              <li>Personalize your experience and deliver relevant content</li>
              <li>Analyze website usage and trends to improve our offerings</li>
              <li>Protect against fraudulent or unauthorized transactions</li>
              <li>Comply with legal obligations and enforce our terms of service</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">4.1 Third-Party Service Providers</h3>
                <p class="text-gray-700 leading-relaxed mb-2">We may share your information with third-party service providers who perform services on our behalf, including:</p>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Payment processors (Stripe, PayPal)</li>
                  <li>Email service providers (Mailchimp, SendGrid)</li>
                  <li>Analytics providers (Google Analytics)</li>
                  <li>Cloud hosting services (AWS, DigitalOcean)</li>
                  <li>Customer support platforms</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">4.2 Legal Requirements</h3>
                <p class="text-gray-700 leading-relaxed">
                  We may disclose your information if required by law, legal process, or government request, 
                  or if we believe disclosure is necessary to protect our rights, property, or safety, or that of others.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">4.3 Business Transfers</h3>
                <p class="text-gray-700 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">4.4 Consent</h3>
                <p class="text-gray-700 leading-relaxed">
                  We may share your information with your consent or at your direction.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <div class="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 class="font-semibold text-blue-900 mb-2">Security Measures Include:</h4>
              <ul class="list-disc list-inside text-blue-800 text-sm space-y-1 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular data backups</li>
              </ul>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">6.1 Access and Update</h3>
                <p class="text-gray-700 leading-relaxed">
                  You have the right to access, update, or correct your personal information. 
                  You can do this by logging into your account or contacting us directly.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">6.2 Data Portability</h3>
                <p class="text-gray-700 leading-relaxed">
                  You have the right to request a copy of your personal information in a structured, commonly used format.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">6.3 Deletion</h3>
                <p class="text-gray-700 leading-relaxed">
                  You can request that we delete your personal information, subject to certain exceptions 
                  (e.g., legal obligations, transaction records).
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">6.4 Marketing Communications</h3>
                <p class="text-gray-700 leading-relaxed">
                  You can opt-out of marketing emails by clicking the unsubscribe link in our emails or contacting us directly. 
                  You will still receive transactional emails related to your purchases or account.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">6.5 Cookies</h3>
                <p class="text-gray-700 leading-relaxed">
                  You can control cookies through your browser settings. Most browsers allow you to block or delete cookies, 
                  but this may affect website functionality.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have data protection laws that are different from the laws of your country.
            </p>
            <p class="text-gray-700 leading-relaxed">
              When we transfer your information internationally, we implement appropriate safeguards to protect your information 
              in accordance with applicable data protection laws.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-900 mb-2">Retention Periods:</h4>
              <ul class="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                <li><strong>Account Information:</strong> Until account deletion or 3 years of inactivity</li>
                <li><strong>Transaction Records:</strong> 7 years for tax and legal purposes</li>
                <li><strong>Marketing Data:</strong> Until unsubscribed or 2 years of inactivity</li>
                <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
              </ul>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Our services are not intended for children under the age of 13 (or the minimum age in your jurisdiction). 
              We do not knowingly collect personal information from children under 13.
            </p>
            <p class="text-gray-700 leading-relaxed">
              If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us immediately so we can delete such information.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party sites. 
              We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page 
              and updating the "Last Updated" date.
            </p>
            <p class="text-gray-700 leading-relaxed">
              For significant changes, we may also notify you via email or through a notice on our website. 
              Your continued use of our services after the changes take effect constitutes acceptance of the new Privacy Policy.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h4 class="font-semibold text-gray-900 mb-3">Data Protection Officer</h4>
              <p class="text-gray-700 mb-2"><strong>Email:</strong> privacy&#64;ajazbeig.com</p>
              <p class="text-gray-700 mb-2"><strong>General Contact:</strong> ajazbeig200&#64;gmail.com</p>
              <p class="text-gray-700 mb-2"><strong>Website:</strong> www.ajazbeig.in/contact</p>
              <p class="text-gray-700 mb-2"><strong>Response Time:</strong> Within 48 hours</p>
              <p class="text-gray-700 text-sm mt-3">
                <em>We are committed to resolving privacy concerns promptly and transparently.</em>
              </p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">13. Regulatory Compliance</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">13.1 GDPR (European Union)</h3>
                <p class="text-gray-700 leading-relaxed">
                  If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), 
                  including the right to access, rectify, erase, restrict processing, object to processing, and data portability.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">13.2 CCPA (California)</h3>
                <p class="text-gray-700 leading-relaxed">
                  If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), 
                  including the right to know what personal information we collect, the right to delete personal information, 
                  and the right to opt-out of the sale of personal information.
                </p>
              </div>
            </div>
          </section>

          <div class="border-t pt-6 mt-8 text-center text-gray-500">
            <p>This Privacy Policy was last updated on {{ lastUpdated }}</p>
            <p class="text-sm mt-2">We are committed to protecting your privacy and being transparent about our data practices.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PrivacyComponent implements OnInit {
  lastUpdated = 'November 9, 2025';

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getPrivacySEO());
  }
}