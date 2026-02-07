import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative min-h-screen flex items-center justify-center
             bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden"
    >
      <!-- Background glow -->
      <div
        class="absolute inset-0
               bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)]"
      ></div>

      <!-- Card -->
      <div
        class="relative z-10 bg-white/10 backdrop-blur-2xl
               border border-white/20 rounded-3xl shadow-2xl
               p-12 max-w-lg text-center"
      >
        <!-- Animated Icon -->
        <div class="flex justify-center mb-8">
          <div
            class="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600
                   flex items-center justify-center shadow-xl animate-spin-slow text-4xl"
          >
            ⚙️
          </div>
        </div>

        <!-- Brand -->
        <h2
          class="text-indigo-300 uppercase tracking-[0.3em]
                 text-xs font-semibold mb-3"
        >
          Tech Trident
        </h2>

        <!-- Title -->
        <h1 class="text-4xl font-extrabold text-white mb-4">
          Under Maintenance
        </h1>

        <!-- Description -->
        <p class="text-indigo-200 leading-relaxed mb-8">
          We’re fine-tuning our systems to deliver a faster, smarter,
          and more secure experience.
        </p>

        <!-- Divider -->
        <div class="flex items-center justify-center mb-8">
          <span class="h-px w-16 bg-indigo-400/40"></span>
          <span class="mx-3 text-indigo-300 text-xs">STATUS</span>
          <span class="h-px w-16 bg-indigo-400/40"></span>
        </div>

        <!-- Status Badge -->
        <div
          class="inline-flex items-center gap-2
                 bg-indigo-500/20 text-indigo-200
                 px-5 py-2 rounded-full text-sm font-medium"
        >
          <span class="w-2 h-2 bg-indigo-400 rounded-full animate-ping"></span>
          Maintenance in progress
        </div>

        <!-- Footer -->
        <p class="text-xs text-indigo-300 mt-10">
          © 2026 TechTrident. All rights reserved.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .animate-spin-slow {
        animation: spin 6s linear infinite;
      }
    `,
  ],
})
export class Maintenance {}
