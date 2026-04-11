import { Component, output, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white dark-mode:bg-[#2d2d2d] shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-[#452829] rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">T</span>
          </div>
          <span class="text-xl font-bold text-[#452829] dark-mode:text-[#d1b9ae] tracking-tight">Tech Trident</span>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a routerLink="/" routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold" class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors">Home</a>
          <a routerLink="/services" routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold" class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors">Services</a>
          <a routerLink="/portfolio" routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold" class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors">Portfolio</a>
          <a routerLink="/about" routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold" class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors">About Us</a>
          <a routerLink="/contact" routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold" class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors">Contact</a>
        </div>

        <div class="flex items-center gap-4">
          <button (click)="toggleDarkMode.emit()" class="p-2 rounded-full bg-gray-100 dark-mode:bg-gray-700 text-gray-600 dark-mode:text-gray-300 hover:bg-gray-200 dark-mode:hover:bg-gray-600 transition-all">
            <i [class]="darkMode() ? 'pi pi-sun' : 'pi pi-moon'" class="text-lg"></i>
          </button>
          <a routerLink="/contact" class="bg-[#452829] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#57595B] transition-all shadow-md">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  darkMode = input<boolean>(false);
  toggleDarkMode = output<void>();
}
