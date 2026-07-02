import { CommonModule } from '@angular/common';
import { Component, output, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
<header
  class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/60">

  <nav
    class="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

    <!-- Logo -->
    <a
      routerLink="/"
      class="flex items-center gap-3 group">

      <!-- <div
        class="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 transition duration-300 group-hover:rotate-6"> -->

<!-- <div -->
  <!-- class="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 transition duration-300 group-hover:rotate-6"> -->

  <img
    src="assets/trident_logo.png"
    alt="Tech Trident Logo"
    class="w-12 h-12 object-contain" />

<!-- </div> -->

      <!-- </div> -->

      <div>

        <h1
          class="text-xl font-bold text-white tracking-tight">
          Tech Trident
        </h1>

        <p
          class="text-xs text-cyan-300">
          Digital Innovation
        </p>

      </div>

    </a>

    <!-- Desktop Navigation -->
    <div
      class="hidden lg:flex items-center gap-2">

      <a
        routerLink="/"
        routerLinkActive
        #home="routerLinkActive"
        [routerLinkActiveOptions]="{exact:true}"
        class="relative px-5 py-2 rounded-xl transition-all duration-300"
        [ngClass]="home.isActive
        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
        : 'text-slate-300 hover:text-white hover:bg-white/5'">

        Home

      </a>

      <a
        routerLink="/services"
        routerLinkActive
        #services="routerLinkActive"
        class="relative px-5 py-2 rounded-xl transition-all duration-300"
        [ngClass]="services.isActive
        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
        : 'text-slate-300 hover:text-white hover:bg-white/5'">

        Services

      </a>

      <a
        routerLink="/portfolio"
        routerLinkActive
        #portfolio="routerLinkActive"
        class="relative px-5 py-2 rounded-xl transition-all duration-300"
        [ngClass]="portfolio.isActive
        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
        : 'text-slate-300 hover:text-white hover:bg-white/5'">

        Portfolio

      </a>

      <a
        routerLink="/about"
        routerLinkActive
        #about="routerLinkActive"
        class="relative px-5 py-2 rounded-xl transition-all duration-300"
        [ngClass]="about.isActive
        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
        : 'text-slate-300 hover:text-white hover:bg-white/5'">

        About

      </a>

      <a
        routerLink="/contact"
        routerLinkActive
        #contact="routerLinkActive"
        class="relative px-5 py-2 rounded-xl transition-all duration-300"
        [ngClass]="contact.isActive
        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
        : 'text-slate-300 hover:text-white hover:bg-white/5'">

        Contact

      </a>

    </div>

    <!-- Right Side -->
    <div
      class="flex items-center gap-3">

      <!-- Theme -->
      <!-- <button
        (click)="toggleDarkMode.emit()"
        class="w-11 h-11 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center text-slate-300 hover:text-white">

        <i
          [class]="darkMode() ? 'pi pi-sun' : 'pi pi-moon'"
          class="text-lg">
        </i>

      </button> -->

      <!-- CTA -->
      <a
        routerLink="/contact"
        class="hidden sm:flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-6 py-3 text-white font-semibold shadow-xl hover:scale-105 transition">

        Get Started

        <i class="pi pi-arrow-right"></i>

      </a>

      <!-- Mobile -->
      <button
        (click)="toggleMenu()"
        class="lg:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white">

        <i
          [class]="menuOpen() ? 'pi pi-times' : 'pi pi-bars'"
          class="text-xl">
        </i>

      </button>

    </div>

  </nav>

  <!-- Mobile Menu -->
  <div
    *ngIf="menuOpen()"
    class="lg:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">

    <div class="p-5 space-y-2">

      <a
        routerLink="/"
        (click)="closeMenu()"
        routerLinkActive
        #mhome="routerLinkActive"
        [routerLinkActiveOptions]="{exact:true}"
        class="block rounded-xl px-4 py-3 transition"
        [ngClass]="mhome.isActive ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-white/5'">

        Home

      </a>

      <a
        routerLink="/services"
        (click)="closeMenu()"
        routerLinkActive
        #mservices="routerLinkActive"
        class="block rounded-xl px-4 py-3 transition"
        [ngClass]="mservices.isActive ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-white/5'">

        Services

      </a>

      <a
        routerLink="/portfolio"
        (click)="closeMenu()"
        routerLinkActive
        #mportfolio="routerLinkActive"
        class="block rounded-xl px-4 py-3 transition"
        [ngClass]="mportfolio.isActive ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-white/5'">

        Portfolio

      </a>

      <a
        routerLink="/about"
        (click)="closeMenu()"
        routerLinkActive
        #mabout="routerLinkActive"
        class="block rounded-xl px-4 py-3 transition"
        [ngClass]="mabout.isActive ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-white/5'">

        About

      </a>

      <a
        routerLink="/contact"
        (click)="closeMenu()"
        routerLinkActive
        #mcontact="routerLinkActive"
        class="block rounded-xl px-4 py-3 transition"
        [ngClass]="mcontact.isActive ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-white/5'">

        Contact

      </a>

      <a
        routerLink="/contact"
        (click)="closeMenu()"
        class="mt-5 flex justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-5 py-3 font-semibold text-white shadow-lg">

        Get Started

      </a>

    </div>

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
