import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-[#452829] text-[#E8D1C5] pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-8 h-8 bg-[#E8D1C5] rounded-md flex items-center justify-center">
                <span class="text-[#452829] font-bold text-lg">T</span>
              </div>
              <span class="text-xl font-bold text-white">Tech Trident</span>
            </div>
            <p class="text-sm leading-relaxed opacity-80">
              Building scalable digital solutions for modern businesses. We specialize in custom software, AI-powered systems, and high-performance websites.
            </p>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-6">Quick Links</h4>
            <ul class="space-y-4 text-sm opacity-80">
              <li><a routerLink="/" class="hover:text-white transition-colors">Home</a></li>
              <li><a routerLink="/services" class="hover:text-white transition-colors">Services</a></li>
              <li><a routerLink="/portfolio" class="hover:text-white transition-colors">Portfolio</a></li>
              <li><a routerLink="/about" class="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-6">Services</h4>
            <ul class="space-y-4 text-sm opacity-80">
              <li><a href="#" class="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" class="hover:text-white transition-colors">RAG & MCP Servers</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#" class="hover:text-white transition-colors">E-commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-6">Connect</h4>
            <ul class="space-y-4 text-sm opacity-80">
              <li>Email: webworks62@gmail.com</li>
              <li>Phone: +91 9502214310</li>
              <!-- <li>Location: Global Delivery Center</li> -->
            </ul>
          </div>
        </div>

        <div class="border-t border-[#57595B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; 2026 Tech Trident. All rights reserved.</p>
          <div class="flex gap-6">
            <a routerLink="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a>
            <a routerLink="/terms-of-service" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
