import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Refund Policy
          </h1>
          <p class="text-lg text-gray-600">
            Last updated: {{ lastUpdated }}
          </p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-xl shadow-lg p-8 lg:p-12 prose prose-lg max-w-none">
          
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              At Ajaz Beig, we stand behind the quality of our digital products and services. 
              This refund policy outlines the conditions under which refunds may be requested and processed 
              for purchases made through our website.
            </p>
            <p class="text-gray-700 leading-relaxed">
              We aim to ensure customer satisfaction while maintaining fair policies for digital product sales. 
              Please read this policy carefully before making a purchase.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Digital Products Refund Policy</h2>
            
            <div class="space-y-4">
              <div class="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 class="text-lg font-semibold text-blue-900 mb-2">🔍 Important Notice</h3>
                <p class="text-blue-800">
                  Due to the nature of digital products (instant download/access), all sales are generally considered final. 
                  However, we do offer refunds under specific circumstances outlined below.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.1 Refund Eligibility Period</h3>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                  <li><strong>Digital Products (Templates, Code, Tools):</strong> 7 days from date of purchase</li>
                  <li><strong>Online Courses:</strong> 14 days from date of purchase</li>
                  <li><strong>Consultation Services:</strong> 24 hours before scheduled session</li>
                  <li><strong>Custom Development Projects:</strong> As specified in project agreement</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.2 Valid Refund Reasons</h3>
                <p class="text-gray-700 leading-relaxed mb-2">Refunds may be granted for the following reasons:</p>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Product does not match the description provided</li>
                  <li>Technical issues preventing product download or access</li>
                  <li>Product contains significant bugs or errors that affect functionality</li>
                  <li>Duplicate purchase made in error</li>
                  <li>Product is fundamentally different from what was advertised</li>
                  <li>Payment processing errors or unauthorized charges</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">2.3 Refund Exclusions</h3>
                <p class="text-gray-700 leading-relaxed mb-2">Refunds will NOT be granted for:</p>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Change of mind or buyer's remorse</li>
                  <li>Lack of technical skills to implement the product</li>
                  <li>Compatibility issues with older software/systems not mentioned in requirements</li>
                  <li>Products that have been fully consumed (e.g., completed courses with certificates)</li>
                  <li>Custom work that has been delivered according to specifications</li>
                  <li>Products purchased more than the eligibility period ago</li>
                  <li>Violation of license terms or unauthorized distribution</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Service-Specific Refund Policies</h2>
            
            <div class="space-y-6">
              <div class="border-l-4 border-blue-500 pl-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3.1 Online Courses & Tutorials</h3>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>14-day refund period from purchase date</li>
                  <li>Must have completed less than 25% of the course content</li>
                  <li>No refund available after course completion certificate is issued</li>
                  <li>Refund request must include specific reason for dissatisfaction</li>
                </ul>
              </div>

              <div class="border-l-4 border-green-500 pl-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3.2 Templates & Code Packages</h3>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>7-day refund period from purchase date</li>
                  <li>Product must not have been implemented in a live project</li>
                  <li>All source files must be returned/deleted upon refund</li>
                  <li>Customization services are non-refundable</li>
                </ul>
              </div>

              <div class="border-l-4 border-purple-500 pl-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3.3 Consultation Services</h3>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Full refund if cancelled 24+ hours before scheduled session</li>
                  <li>50% refund if cancelled 2-24 hours before session</li>
                  <li>No refund for cancellations less than 2 hours before session</li>
                  <li>No refund after consultation has been completed</li>
                </ul>
              </div>

              <div class="border-l-4 border-red-500 pl-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">3.4 Custom Development Projects</h3>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Refund terms specified in individual project contracts</li>
                  <li>Milestone-based payments are non-refundable once milestone is completed</li>
                  <li>Client may terminate project with payment for completed work</li>
                  <li>Refunds for undelivered work based on project agreement</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">4. How to Request a Refund</h2>
            
            <div class="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Process:</h3>
              
              <ol class="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 ml-4">
                <li>
                  <strong>Contact Us:</strong> Send an email to <span class="text-blue-600">refunds&#64;ajazbeig.com</span> 
                  or use our contact form
                </li>
                <li>
                  <strong>Include Required Information:</strong>
                  <ul class="list-disc list-inside text-gray-600 text-sm mt-2 ml-4 space-y-1">
                    <li>Order number or transaction ID</li>
                    <li>Date of purchase</li>
                    <li>Product name</li>
                    <li>Detailed reason for refund request</li>
                    <li>Email address used for purchase</li>
                  </ul>
                </li>
                <li><strong>Await Response:</strong> We'll review your request within 2 business days</li>
                <li><strong>Provide Additional Information:</strong> If requested, provide any additional details</li>
                <li><strong>Refund Processing:</strong> If approved, refund will be processed within 5-10 business days</li>
              </ol>
            </div>

            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-semibold text-yellow-800 mb-2">⚠️ Important Notes:</h4>
              <ul class="list-disc list-inside text-yellow-700 text-sm space-y-1 ml-4">
                <li>All refund requests must be made within the eligibility period</li>
                <li>Incomplete or vague refund requests may be rejected</li>
                <li>We reserve the right to request additional verification</li>
                <li>Approved refunds are processed to the original payment method</li>
              </ul>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Refund Processing</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">5.1 Processing Timeline</h3>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li><strong>Request Review:</strong> 1-2 business days</li>
                  <li><strong>Approval Notification:</strong> Within 48 hours of review</li>
                  <li><strong>Refund Processing:</strong> 3-5 business days</li>
                  <li><strong>Bank Processing:</strong> 2-10 business days (depends on payment method)</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">5.2 Payment Method Returns</h3>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li><strong>Credit/Debit Cards:</strong> 3-10 business days</li>
                  <li><strong>PayPal:</strong> 1-3 business days</li>
                  <li><strong>Bank Transfers:</strong> 5-10 business days</li>
                  <li><strong>Digital Wallets:</strong> 1-5 business days</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">5.3 Refund Amount</h3>
                <p class="text-gray-700 leading-relaxed mb-2">
                  Refunds are processed for the full purchase amount minus any applicable fees:
                </p>
                <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>Payment processing fees (typically 2.9% + $0.30) are non-refundable</li>
                  <li>Currency conversion fees may apply for international transactions</li>
                  <li>Bank or payment provider fees are deducted from refund amount</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Chargeback Policy</h2>
            <div class="bg-red-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-red-900 mb-3">🚫 Important Chargeback Notice</h3>
              <p class="text-red-800 leading-relaxed mb-4">
                We strongly encourage customers to contact us directly before initiating a chargeback with their bank or credit card company. 
                Chargebacks can result in additional fees and may affect future purchasing ability.
              </p>
              <div class="space-y-2">
                <p class="text-red-700"><strong>Consequences of Chargebacks:</strong></p>
                <ul class="list-disc list-inside text-red-700 text-sm space-y-1 ml-4">
                  <li>Account suspension and loss of access to purchased products</li>
                  <li>Inability to make future purchases</li>
                  <li>Potential legal action for fraudulent chargebacks</li>
                  <li>Additional bank fees that may be passed to the customer</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Dispute Resolution</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">7.1 Internal Resolution</h3>
                <p class="text-gray-700 leading-relaxed">
                  We are committed to resolving refund disputes fairly and promptly. 
                  If you're unsatisfied with our initial response, you may request escalation to our senior management team.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">7.2 External Mediation</h3>
                <p class="text-gray-700 leading-relaxed">
                  For unresolved disputes, we recommend using online dispute resolution platforms or consumer protection agencies 
                  before pursuing legal action.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Exceptions and Special Cases</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">8.1 Technical Issues</h3>
                <p class="text-gray-700 leading-relaxed">
                  If you experience technical difficulties accessing your purchase, please contact our support team first. 
                  We'll work to resolve technical issues before considering a refund.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">8.2 Promotional and Discounted Items</h3>
                <p class="text-gray-700 leading-relaxed">
                  Items purchased during sales, with discount codes, or as part of bundles are subject to the same refund policy, 
                  but refunds are processed at the actual amount paid.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">8.3 Force Majeure</h3>
                <p class="text-gray-700 leading-relaxed">
                  In cases of extraordinary circumstances (natural disasters, pandemics, etc.) that affect our ability to deliver services, 
                  we may offer extended refund periods or alternative compensation.
                </p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h4 class="font-semibold text-gray-900 mb-3">Refund Department</h4>
              <p class="text-gray-700 mb-2"><strong>Email:</strong> refunds&#64;ajazbeig.com</p>
              <p class="text-gray-700 mb-2"><strong>General Support:</strong> hello&#64;ajazbeig.com</p>
              <p class="text-gray-700 mb-2"><strong>Website:</strong> www.ajazbeig.com/contact</p>
              <p class="text-gray-700 mb-4"><strong>Response Time:</strong> Within 24 hours</p>
              
              <div class="text-sm text-gray-600">
                <p class="mb-2"><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (IST)</p>
                <p><strong>Emergency Contact:</strong> For urgent refund matters, mark your email as "URGENT - REFUND REQUEST"</p>
              </div>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              We may update this Refund Policy from time to time to reflect changes in our products, services, or legal requirements. 
              Any changes will be posted on this page with an updated "Last Updated" date.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Significant changes will be communicated via email to existing customers. 
              Continued use of our services after policy updates constitutes acceptance of the revised terms.
            </p>
          </section>

          <div class="border-t pt-6 mt-8 text-center text-gray-500">
            <p>This Refund Policy was last updated on {{ lastUpdated }}</p>
            <p class="text-sm mt-2">We strive to provide fair and transparent refund processes for all our customers.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class RefundComponent implements OnInit {
  lastUpdated = 'November 9, 2025';

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getRefundSEO());
  }
}