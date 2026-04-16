import { CommonModule } from '@angular/common';
import { Component, output, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header
      class="bg-white dark-mode:bg-[#2d2d2d] shadow-sm sticky top-0 z-50 transition-colors duration-300"
    >
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-[#452829] rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">T</span>
          </div>
          <span class="text-xl font-bold text-[#452829] dark-mode:text-[#d1b9ae] tracking-tight"
            >Tech Trident</span
          >
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a
            routerLink="/"
            routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold"
            class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors"
            >Home</a
          >
          <a
            routerLink="/services"
            routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold"
            class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors"
            >Services</a
          >
          <a
            routerLink="/portfolio"
            routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold"
            class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors"
            >Portfolio</a
          >
          <a
            routerLink="/about"
            routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold"
            class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors"
            >About Us</a
          >
          <a
            routerLink="/contact"
            routerLinkActive="text-[#452829] dark-mode:text-[#d1b9ae] font-semibold"
            class="text-[#57595B] dark-mode:text-gray-300 hover:text-[#452829] dark-mode:hover:text-white transition-colors"
            >Contact</a
          >
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-4">
          <button
            (click)="toggleDarkMode.emit()"
            class="p-2 rounded-full bg-gray-100 dark-mode:bg-gray-700 text-gray-600 dark-mode:text-gray-300 hover:bg-gray-200 dark-mode:hover:bg-gray-600 transition-all"
          >
            <i [class]="darkMode() ? 'pi pi-sun' : 'pi pi-moon'" class="text-lg"></i>
          </button>

          <a
            routerLink="/contact"
            class="hidden sm:inline-block bg-[#452829] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#57595B] transition-all shadow-md"
          >
            Get Started
          </a>

          <!-- Mobile Menu Button (NEW) -->
          <button (click)="toggleMenu()" class="md:hidden p-2">
            <i class="pi pi-bars text-xl"></i>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu (NEW) -->
      <div *ngIf="menuOpen()" class="md:hidden px-4 pb-4 space-y-3 bg-white dark-mode:bg-[#2d2d2d]">
        <a
          (click)="closeMenu()"
          routerLink="/"
          class="block text-[#57595B] dark-mode:text-gray-300 py-2 border-b"
          >Home</a
        >
        <a
          (click)="closeMenu()"
          routerLink="/services"
          class="block text-[#57595B] dark-mode:text-gray-300 py-2 border-b"
          >Services</a
        >
        <a
          (click)="closeMenu()"
          routerLink="/portfolio"
          class="block text-[#57595B] dark-mode:text-gray-300 py-2 border-b"
          >Portfolio</a
        >
        <a
          (click)="closeMenu()"
          routerLink="/about"
          class="block text-[#57595B] dark-mode:text-gray-300 py-2 border-b"
          >About Us</a
        >
        <a
          (click)="closeMenu()"
          routerLink="/contact"
          class="block text-[#57595B] dark-mode:text-gray-300 py-2"
          >Contact</a
        >

        <a
          routerLink="/contact"
          class="block text-center bg-[#452829] text-white py-2 rounded-full"
        >
          Get Started
        </a>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  darkMode = input<boolean>(false);
  toggleDarkMode = output<void>();

  // NEW (only logic added)
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
