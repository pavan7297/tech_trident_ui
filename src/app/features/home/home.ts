import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col gap-20">
      <!-- Hero Section -->
<section
  class="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24 lg:py-32"
>
  <!-- Animated Background -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">

    <div
      class="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"
    ></div>

    <div
      class="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-violet-500/20 blur-[120px] animate-pulse"
      style="animation-delay:1s"
    ></div>

    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"
      style="animation-delay:2s"
    ></div>

    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 opacity-[0.04]"
      style="
        background-image:
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px);
        background-size:60px 60px;
      "
    ></div>

  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

    <div
      class="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-lg"
    >
      <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
      <span class="text-cyan-300 text-sm font-medium tracking-wide">
        Premium Software Development
      </span>
    </div>

    <h1
      class="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight"
    >
      Building Scalable Digital
      <br class="hidden md:block" />
      <span
        class="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
      >
        Solutions for Modern Businesses
      </span>
    </h1>

    <p
      class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
    >
      Custom software, intelligent systems, and high-performance websites
      tailored for growth. We turn complex challenges into seamless digital
      experiences.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-5">

      <a
        routerLink="/contact"
        class="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-9 py-4 rounded-full text-lg font-semibold shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/50 w-full sm:w-auto"
      >
        <span class="relative z-10 flex items-center justify-center gap-2">
          Get Started
          <i
            class="pi pi-arrow-right transition-transform duration-300 group-hover:translate-x-1"
          ></i>
        </span>

        <span
          class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></span>
      </a>

      <a
        routerLink="/portfolio"
        class="group bg-white/10 backdrop-blur-xl border border-white/20 text-white px-9 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-500 hover:bg-white hover:text-slate-900 hover:scale-105 w-full sm:w-auto"
      >
        <span class="flex items-center justify-center gap-2">
          View Portfolio
          <i
            class="pi pi-external-link transition-transform duration-300 group-hover:rotate-12"
          ></i>
        </span>
      </a>

    </div>

  </div>
</section>

      <!-- Services Overview -->
<section class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

  <!-- Background Glow -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style="animation-delay:1.5s"></div>
  </div>

  <div class="relative z-10">

    <div class="text-center mb-20">

      <span
        class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-600 text-sm font-semibold backdrop-blur-xl mb-6"
      >
        <i class="pi pi-star-fill text-xs"></i>
        What We Do
      </span>

      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6"
      >
        Our
        <span
          class="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent"
        >
          Core Expertise
        </span>
      </h2>

      <p class="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
        We build scalable digital products using modern technologies that help
        businesses grow faster and smarter.
      </p>

      <div
        class="w-28 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 mx-auto rounded-full mt-8"
      ></div>

    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      @for (service of services; track service.title) {

      <div
        class="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30"
      >

        <!-- Hover Glow -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-violet-500/10 transition-all duration-700"
        ></div>

        <!-- Top Accent -->
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        ></div>

        <div class="relative z-10">

          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-7 shadow-lg shadow-cyan-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
          >
            <i
              [class]="service.icon"
              class="text-2xl text-white transition-transform duration-500 group-hover:scale-125"
            ></i>
          </div>

          <h3
            class="text-2xl font-bold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-cyan-600"
          >
            {{ service.title }}
          </h3>

          <p class="text-slate-600 mb-8 leading-relaxed">
            {{ service.description }}
          </p>

          <a
            routerLink="/services"
            class="inline-flex items-center gap-2 text-cyan-600 font-semibold transition-all duration-300 group-hover:gap-4 group-hover:text-blue-700"
          >
            Learn More
            <i
              class="pi pi-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-2"
            ></i>
          </a>

        </div>

      </div>

      }

    </div>

  </div>

</section>

      <!-- Why Choose Us -->
<section
  class="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-24"
>
  <!-- Background Effects -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">

    <div
      class="absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-cyan-500/15 blur-[120px] animate-pulse"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-violet-500/15 blur-[120px] animate-pulse"
      style="animation-delay:1.5s"
    ></div>

    <!-- Grid -->
    <div
      class="absolute inset-0 opacity-[0.05]"
      style="
        background-image:
        linear-gradient(to right,white 1px,transparent 1px),
        linear-gradient(to bottom,white 1px,transparent 1px);
        background-size:60px 60px;
      "
    ></div>

  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      <!-- Left Content -->
      <div>

        <span
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-xl text-cyan-300 font-medium mb-8"
        >
          <i class="pi pi-shield"></i>
          Why Choose Us
        </span>

        <h2
          class="text-4xl md:text-6xl font-extrabold mb-8 leading-tight"
        >
          Why
          <span
            class="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
          >
            Tech Trident
          </span>
          is Your
          <br />
          Best Digital Partner
        </h2>

        <p class="text-lg text-slate-300 mb-12 leading-relaxed">
          We don't just write code; we architect solutions that drive business
          growth. Our approach combines technical excellence with a deep
          understanding of market needs.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

          @for (point of highlights; track point.title) {

          <div
            class="group flex gap-4 rounded-2xl p-4 transition-all duration-500 hover:bg-white/5 hover:backdrop-blur-xl hover:translate-x-2"
          >

            <div
              class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
            >
              <i class="pi pi-check text-white font-bold"></i>
            </div>

            <div>
              <h4
                class="font-bold text-white text-lg mb-2 transition-colors duration-300 group-hover:text-cyan-300"
              >
                {{ point.title }}
              </h4>

              <p class="text-sm text-slate-400 leading-relaxed">
                {{ point.text }}
              </p>
            </div>

          </div>

          }

        </div>

      </div>

      <!-- Right Card -->
      <div class="relative flex justify-center">

        <!-- Glow -->
        <div
          class="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-[100px] animate-pulse"
        ></div>

        <div
          class="relative aspect-square w-full max-w-md rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800/90 via-slate-900 to-slate-950 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-700 hover:scale-105 hover:shadow-cyan-500/20"
        >

          <!-- Decorative Circles -->
          <div
            class="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"
          ></div>

          <div
            class="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl"
          ></div>

          <!-- Icon -->
          <div
            class="absolute inset-0 flex items-center justify-center"
          >
            <i
              class="pi pi-bolt text-[10rem] text-cyan-400/10 animate-pulse"
            ></i>
          </div>

          <!-- Glass Card -->
          <div
            class="absolute inset-0 flex items-center justify-center p-12"
          >

            <div
              class="w-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-10 text-center shadow-2xl"
            >

              <div
                class="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mb-3"
              >
                100%
              </div>

              <span
                class="text-sm uppercase tracking-[0.35em] text-slate-300"
              >
                Custom Solutions
              </span>

              <div
                class="mt-8 h-2 rounded-full bg-slate-700 overflow-hidden"
              >
                <div
                  class="h-full w-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
                ></div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      <!-- Portfolio Preview -->
<section class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

  <!-- Background Glow -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      class="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"
    ></div>

    <div
      class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-500/10 blur-[120px] animate-pulse"
      style="animation-delay:1.5s"
    ></div>
  </div>

  <div class="relative z-10">

    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">

      <div class="max-w-2xl">

        <span
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-600 text-sm font-semibold backdrop-blur-xl mb-6"
        >
          <i class="pi pi-briefcase"></i>
          Portfolio Showcase
        </span>

        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6"
        >
          Featured
          <span
            class="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent"
          >
            Projects
          </span>
        </h2>

        <p class="text-lg text-slate-500 leading-relaxed">
          A glimpse into the scalable solutions we've delivered for our clients
          across various industries.
        </p>

      </div>

      <a
        routerLink="/portfolio"
        class="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/40"
      >
        View All Work

        <i
          class="pi pi-arrow-right transition-transform duration-300 group-hover:translate-x-2"
        ></i>
      </a>

    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

      @for (project of featuredProjects; track project.title) {

      <div
        class="group relative overflow-hidden rounded-[30px] aspect-[16/10] border border-slate-200 bg-slate-900 shadow-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(6,182,212,0.25)]"
      >

        <!-- Image -->
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          [style.background-image]="'url(' + project.img + ')'"
        ></div>

        <!-- Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"
        ></div>

        <!-- Hover Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 transition-all duration-700"
        ></div>

        <!-- Floating Glass Card -->
        <div
          class="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-xl bg-gradient-to-t from-black/70 to-transparent"
        >

          <div class="flex flex-wrap gap-2 mb-5">

            @for (tech of project.tech; track tech) {

            <span
              class="px-3 py-1 rounded-full text-[11px] uppercase tracking-widest bg-white/10 border border-white/10 backdrop-blur-xl text-cyan-200 transition-all duration-300 group-hover:bg-cyan-500/20"
            >
              {{ tech }}
            </span>

            }

          </div>

          <h3
            class="text-3xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-300"
          >
            {{ project.title }}
          </h3>

          <p class="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
            {{ project.description }}
          </p>

          <a
            routerLink="/portfolio"
            class="group/link inline-flex items-center gap-2 text-cyan-300 font-semibold transition-all duration-300 hover:text-white"
          >
            View Details

            <i
              class="pi pi-arrow-right text-xs transition-transform duration-300 group-hover/link:translate-x-2"
            ></i>

          </a>

        </div>

        <!-- Top Right Floating Button -->
        <div
          class="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12"
        >
          <i class="pi pi-external-link text-white"></i>
        </div>

      </div>

      }

    </div>

  </div>

</section>

<!-- Process Section -->
<section
  class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24"
>
  <!-- Background Glow -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">

    <div
      class="absolute -top-20 left-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"
    ></div>

    <div
      class="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-violet-500/10 blur-[120px] animate-pulse"
      style="animation-delay:1.5s"
    ></div>

    <div
      class="absolute inset-0 opacity-[0.04]"
      style="
      background-image:
      linear-gradient(to right,#0f172a 1px,transparent 1px),
      linear-gradient(to bottom,#0f172a 1px,transparent 1px);
      background-size:60px 60px;
    "
    ></div>

  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-20">

      <span
        class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-700 font-semibold backdrop-blur-xl mb-6"
      >
        <i class="pi pi-sitemap"></i>
        Development Workflow
      </span>

      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6"
      >
        Our
        <span
          class="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent"
        >
          Proven Process
        </span>
      </h2>

      <p class="text-lg text-slate-500 max-w-2xl mx-auto">
        From a spark of an idea to a fully deployed scalable system.
      </p>

    </div>

    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">

      @for (step of processSteps; track step.title) {

      <div
        class="group relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30 text-center"
      >

        <!-- Hover Top Line -->
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"
        ></div>

        <!-- Step Number -->
        <div
          class="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-lg shadow-cyan-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
        >
          {{ $index + 1 }}
        </div>

        <h4
          class="font-bold text-slate-900 text-lg mb-3 group-hover:text-cyan-600 transition-colors"
        >
          {{ step.title }}
        </h4>

        <p class="text-sm text-slate-500 leading-relaxed">
          {{ step.desc }}
        </p>

        @if ($index < processSteps.length - 1) {

        <div
          class="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center"
        >
          <i
            class="pi pi-arrow-right text-cyan-600 text-sm animate-pulse"
          ></i>
        </div>

        }

      </div>

      }

    </div>

  </div>

</section>

<!-- Final CTA -->
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

  <div
    class="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
  >

    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden">

      <div
        class="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"
      ></div>

      <div
        class="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-violet-500/20 blur-[120px] animate-pulse"
        style="animation-delay:1.5s"
      ></div>

      <div
        class="absolute inset-0 opacity-[0.05]"
        style="
          background-image:
          linear-gradient(to right,white 1px,transparent 1px),
          linear-gradient(to bottom,white 1px,transparent 1px);
          background-size:60px 60px;
        "
      ></div>

    </div>

    <div class="relative z-10 p-12 md:p-20 text-center">

      <span
        class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-cyan-300 font-medium mb-8"
      >
        <i class="pi pi-rocket"></i>
        Let's Build Something Amazing
      </span>

      <h2
        class="text-4xl md:text-6xl font-extrabold leading-tight mb-8"
      >
        Ready to Build Your Next
        <span
          class="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
        >
          Digital Product?
        </span>
      </h2>

      <p
        class="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12"
      >
        Let's collaborate to create a high-performance solution that scales with
        your business.
      </p>

      <a
        routerLink="/contact"
        class="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/50"
      >
        Contact Us Now

        <i
          class="pi pi-arrow-right transition-transform duration-300 group-hover:translate-x-2"
        ></i>

      </a>

    </div>

  </div>

</section>
    </div>
  `,
})
export class HomeComponent {
  services = [
    {
      title: 'Website Development',
      icon: 'pi pi-globe',
      description: 'High-performance, SEO-optimized websites built with the latest tech stacks.',
    },
    {
      title: 'RAG + MCP Servers',
      icon: 'pi pi-cpu',
      description:
        'AI-powered retrieval systems and custom backend architectures for intelligent apps.',
    },
    {
      title: 'Custom Software',
      icon: 'pi pi-code',
      description: 'Tailor-made enterprise solutions and automation tools designed for efficiency.',
    },
    {
      title: 'Billboard Software',
      icon: 'pi pi- exogenous',
      description: 'Digital display management with remote content control and real-time updates.',
    },
    {
      title: 'Management Systems',
      icon: 'pi pi-database',
      description:
        'Robust admin dashboards and reporting systems for hospitals, hotels, and restaurants.',
    },
    {
      title: 'E-commerce Platforms',
      icon: 'pi pi-shopping-cart',
      description: 'Custom online stores with secure payment integrations and inventory systems.',
    },
  ];

  highlights = [
    {
      title: 'Scalable Architecture',
      text: 'Built to handle growth without compromising performance.',
    },
    {
      title: 'Secure & Optimized',
      text: 'Industry-leading security standards and lightning-fast load times.',
    },
    {
      title: '100% Custom-built',
      text: 'No templates. Every line of code is tailored to your specific needs.',
    },
    { title: 'Fast Delivery', text: 'Agile development process ensuring rapid time-to-market.' },
  ];

  featuredProjects = [
    {
      title: 'MB Careers',
      description:
        'Admissions management platform with dashboards for tracking and analyzing student data.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      link: 'https://www.mbcareersolutions.in/',
      img: '/assets/sites/scr1.png',
    },
    {
      title: 'MB Solutions',
      description:
        'Business services showcase website with enquiry forms and lead generation system.',
      tech: ['Angular', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      link: 'https://services.mbcareersolutions.in/',
      img: '/assets/sites/scr2.png',
    },
    {
      title: 'ISST',
      description:
        'Institutional website for managing courses, student enrollments, and academic workflows.',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'AWS'],
      link: 'https://isst.mbcareersolutions.in/',
      img: '/assets/sites/scr4.png',
    },
    {
      title: 'Behera Website',
      description:
        'Institutional website designed to present courses, admissions, and organizational information clearly.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      link: 'https://behera.mbcareersolutions.in/', // update if different
      img: '/assets/sites/scr5.png', // update if different
    },
    {
      title: 'Digital Godavari',
      description: 'Regional media platform delivering dynamic content with optimized performance.',
      tech: ['Angular', 'Spring Boot', 'Redis', 'Cloudflare'],
      link: 'https://www.digitalgodavary.com/',
      img: '/assets/sites/scr3.png',
    },
    {
      title: 'Blogging Platform',
      description: 'SEO-driven blogging system with smart content suggestions and custom CMS.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'ElasticSearch'],
      link: 'https://www.blogs.techtrident.in',
      img: '',
    },
  ];

  processSteps = [
    { title: 'Analysis', desc: 'Deep dive into requirements and user needs.' },
    { title: 'Planning', desc: 'Architecting the system and UX design.' },
    { title: 'Development', desc: 'Clean, scalable code implementation.' },
    { title: 'Testing', desc: 'Rigorous QA and performance optimization.' },
    { title: 'Deployment', desc: 'Cloud deployment and monitoring.' },
  ];
}
