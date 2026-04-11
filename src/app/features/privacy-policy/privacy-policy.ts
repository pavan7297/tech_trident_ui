import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div class="max-w-4xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100 dark:border-zinc-700">
        <h1 class="text-4xl font-bold text-center mb-8 text-primary-dark dark:text-white">Privacy Policy</h1>
        <p class="text-sm text-gray-500 mb-8 text-center">Last updated: April 11, 2026</p>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">1. Introduction</h2>
            <p>Welcome to our website. We value your privacy and are committed to protecting your personal data. This policy outlines how we handle your information when you visit our site.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">2. Data Collection</h2>
            <p>We may collect information that you provide directly to us, such as your name and email address when you contact us via our forms. We also automatically collect certain technical information, such as your IP address and browser type, to improve our services.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">3. How We Use Your Data</h2>
            <p>The information we collect is used to:</p>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li>Provide and maintain our services.</li>
              <li>Respond to your inquiries and support requests.</li>
              <li>Analyze website traffic to improve user experience.</li>
              <li>Ensure the security and integrity of our platform.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">4. Data Protection</h2>
            <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">5. Your Rights</h2>
            <p>Depending on your location, you may have the right to access, correct, or delete your personal data. Please contact us if you wish to exercise these rights.</p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-white">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
          </section>
        </div>
      </div>
    </div>
  `
})
export class PrivacyPolicyComponent {}
