import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
<footer class="relative overflow-hidden bg-[#020617] pt-24 pb-10 isolate">

    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">

        <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#07142B] to-slate-950"></div>

        <div
            class="absolute -top-60 -left-40 w-[42rem] h-[42rem] rounded-full bg-cyan-500/15 blur-[200px] animate-pulse">
        </div>

        <div
            class="absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-violet-600/15 blur-[180px] animate-pulse"
            style="animation-delay:3s">
        </div>

        <div
            class="absolute inset-0 opacity-[0.05]"
            style="
                background-image:
                linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),
                linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);
                background-size:70px 70px;
            ">
        </div>

    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            <!-- Company -->
            <div>

                <div class="flex items-center gap-4 mb-6">

                    <div
                        class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 flex items-center justify-center shadow-xl">

                        <span class="text-2xl font-black text-white">
                            T
                        </span>

                    </div>

                    <div>

                        <h2 class="text-2xl font-bold text-white">
                            Tech Trident
                        </h2>

                        <p class="text-cyan-300 text-sm">
                            Digital Innovation
                        </p>

                    </div>

                </div>

                <p class="text-slate-400 leading-8">
                    Building enterprise software, AI-powered applications,
                    cloud-native systems, modern websites and scalable digital
                    solutions for startups and businesses worldwide.
                </p>

                <!-- Social -->
                <div class="flex gap-4 mt-8">

                    <a href="#"
                        class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-white transition-all">

                        <i class="pi pi-linkedin"></i>

                    </a>

                    <a href="#"
                        class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition-all">

                        <i class="pi pi-twitter"></i>

                    </a>

                    <a href="#"
                        class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gray-700 hover:text-white transition-all">

                        <i class="pi pi-github"></i>

                    </a>

                    <a href="#"
                        class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-red-500 hover:text-white transition-all">

                        <i class="pi pi-youtube"></i>

                    </a>

                </div>

            </div>

            <!-- Quick Links -->
            <div>

                <h3
                    class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">

                    Quick Links

                </h3>

                <ul class="space-y-4">

                    <li>
                        <a routerLink="/"
                            class="text-slate-400 hover:text-cyan-300 transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a routerLink="/about"
                            class="text-slate-400 hover:text-cyan-300 transition">
                            About
                        </a>
                    </li>

                    <li>
                        <a routerLink="/services"
                            class="text-slate-400 hover:text-cyan-300 transition">
                            Services
                        </a>
                    </li>

                    <li>
                        <a routerLink="/portfolio"
                            class="text-slate-400 hover:text-cyan-300 transition">
                            Portfolio
                        </a>
                    </li>

                    <li>
                        <a routerLink="/contact"
                            class="text-slate-400 hover:text-cyan-300 transition">
                            Contact
                        </a>
                    </li>

                </ul>

            </div>

            <!-- Services -->
            <div>

                <h3
                    class="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-8">

                    Our Services

                </h3>

                <ul class="space-y-4">

                    <li class="text-slate-400 hover:text-white transition">
                        Web Development
                    </li>

                    <li class="text-slate-400 hover:text-white transition">
                        AI Applications
                    </li>

                    <li class="text-slate-400 hover:text-white transition">
                        MCP & RAG Systems
                    </li>

                    <li class="text-slate-400 hover:text-white transition">
                        Enterprise Software
                    </li>

                    <li class="text-slate-400 hover:text-white transition">
                        Cloud Solutions
                    </li>

                    <li class="text-slate-400 hover:text-white transition">
                        E-Commerce Platforms
                    </li>

                </ul>

            </div>

            <!-- Contact -->
            <div>

                <h3
                    class="text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-8">

                    Contact

                </h3>

                <div class="space-y-6">

                    <div class="flex gap-4">

                        <div
                            class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">

                            <i class="pi pi-envelope text-cyan-400"></i>

                        </div>

                        <div>

                            <p class="text-sm text-slate-500">
                                Email
                            </p>

                            <p class="text-white">
                                webworks62@gmail.com
                            </p>

                        </div>

                    </div>

                    <div class="flex gap-4">

                        <div
                            class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">

                            <i class="pi pi-phone text-blue-400"></i>

                        </div>

                        <div>

                            <p class="text-sm text-slate-500">
                                Phone
                            </p>

                            <p class="text-white">
                                +91 9502214310
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <!-- Bottom -->
        <div
            class="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

            <p class="text-slate-500 text-sm">
                © 2026 <span class="text-white font-semibold">Tech Trident</span>.
                All rights reserved.
            </p>

            <div class="flex gap-8 text-sm">

                <a
                    routerLink="/privacy-policy"
                    class="text-slate-500 hover:text-cyan-300 transition">

                    Privacy Policy

                </a>

                <a
                    routerLink="/terms-of-service"
                    class="text-slate-500 hover:text-cyan-300 transition">

                    Terms of Service

                </a>

            </div>

        </div>

    </div>

</footer>
  `
})
export class FooterComponent { }
