import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div class="max-w-4xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100 dark:border-zinc-700">
        <h1 class="text-4xl font-bold text-center mb-8 text-primary-dark dark:text-white">Terms of Service</h1>
        <p class="text-sm text-gray-500 mb-8 text-center">Last updated: April 11, 2026</p>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using the site.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">2. Description of Services</h2>
            <p>This website provides informational content, portfolios, and contact mechanisms. We strive to provide accurate information, but we do not guarantee the completeness or accuracy of all content.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">3. User Obligations</h2>
            <p>You agree not to use the site for any unlawful purpose or in any manner that could damage the site or impede other users' access to the site.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">4. Intellectual Property</h2>
            <p>All content, logos, and designs on this website are the intellectual property of the site owner unless otherwise stated. You may not reproduce or distribute this content without prior written permission.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">5. Limitation of Liability</h2>
            <p>The site owner shall not be liable for any direct, indirect, indirect, or consequential damages arising from your use of this website.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">6. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of your jurisdiction. Any disputes shall be resolved in the local courts of the site owner's residency.</p>
          </section>
        </div>
      </div>
    </div>
  `
})
export class TermsOfServiceComponent {}
