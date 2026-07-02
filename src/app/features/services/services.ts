import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
<section class="relative overflow-hidden bg-[#020617] py-24 isolate">

  <!-- ================= Premium Background ================= -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">

    <!-- Base Gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#07142B] to-slate-950">
    </div>

    <!-- Animated Aurora -->
    <div
      class="absolute -top-72 left-1/4 h-[52rem] w-[52rem] rounded-full bg-cyan-500/20 blur-[220px] animate-[pulse_8s_ease-in-out_infinite]">
    </div>

    <div
      class="absolute top-20 -right-64 h-[48rem] w-[48rem] rounded-full bg-blue-600/20 blur-[220px] animate-[pulse_10s_ease-in-out_infinite]"
      style="animation-delay:2s">
    </div>

    <div
      class="absolute bottom-0 left-1/3 h-[42rem] w-[42rem] rounded-full bg-violet-600/20 blur-[220px] animate-[pulse_12s_ease-in-out_infinite]"
      style="animation-delay:4s">
    </div>

    <!-- Mesh Lighting -->
    <div
      class="absolute inset-0 opacity-60"
      style="
        background:
          radial-gradient(circle at 15% 25%, rgba(6,182,212,.18), transparent 35%),
          radial-gradient(circle at 85% 20%, rgba(59,130,246,.18), transparent 35%),
          radial-gradient(circle at 50% 90%, rgba(168,85,247,.15), transparent 35%);
      ">
    </div>

    <!-- SVG Grid -->
    <svg
      class="absolute inset-0 h-full w-full opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg">

      <defs>
        <pattern
          id="services-grid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse">

          <path
            d="M60 0H0V60"
            fill="none"
            stroke="white"
            stroke-width="0.8" />

        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#services-grid)">
      </rect>

    </svg>

    <!-- Floating Glass Orbs -->
    <div
      class="absolute left-16 top-40 h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl animate-bounce"
      style="animation-duration:10s">
    </div>

    <div
      class="absolute right-32 top-64 h-16 w-16 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl animate-bounce"
      style="animation-duration:12s">
    </div>

    <div
      class="absolute bottom-32 left-1/3 h-20 w-20 rounded-full border border-violet-400/20 bg-violet-500/10 backdrop-blur-xl animate-bounce"
      style="animation-duration:14s">
    </div>

    <div
      class="absolute bottom-24 right-24 h-10 w-10 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-xl animate-pulse">
    </div>

    <!-- Stars -->
    <div class="absolute inset-0">

      <div class="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white animate-ping"></div>

      <div class="absolute left-[80%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse"></div>

      <div class="absolute left-[60%] top-[70%] h-1 w-1 rounded-full bg-blue-300 animate-ping"></div>

      <div class="absolute left-[30%] top-[82%] h-1.5 w-1.5 rounded-full bg-violet-300 animate-pulse"></div>

      <div class="absolute left-[92%] top-[60%] h-1 w-1 rounded-full bg-white animate-ping"></div>

    </div>

    <!-- Top Glow -->
    <div
      class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/5 to-transparent">
    </div>

    <!-- Bottom Glow -->
    <div
      class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent">
    </div>

  </div>
  <!-- ================= End Premium Background ================= -->

  <div class="relative z-10 max-w-7xl mx-auto px-6">

    <!-- Header -->
    <div class="text-center max-w-4xl mx-auto mb-20">

      <span
        class="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-semibold">

        <i class="pi pi-star-fill text-xs"></i>
        Our Services

      </span>

      <h2
        class="mt-8 text-5xl md:text-7xl font-black text-white leading-tight">

        Engineering

        <span
          class="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">

          Digital Excellence

        </span>

      </h2>

      <p
        class="mt-8 text-xl text-slate-300 leading-9">

        From AI-powered platforms to enterprise software, we build scalable,
        secure and high-performance digital products that accelerate business
        growth.

      </p>

    </div>

    <!-- Cards -->
    <div class="grid gap-8 lg:grid-cols-2">

      @for(service of services; track service.title){

      <div
        class="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_30px_80px_rgba(6,182,212,.25)]">

        <!-- Glow -->
        <div
          class="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10">
        </div>

        <div class="relative z-10">

          <!-- Icon -->
          <div
            class="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 shadow-2xl">

            <i
              [class]="service.icon"
              class="text-4xl text-white">
            </i>

          </div>

          <!-- Title -->
          <h3
            class="text-3xl font-bold text-white mb-5">

            {{service.title}}

          </h3>

          <!-- Description -->
          <p
            class="text-slate-300 text-lg leading-8 mb-8">

            {{service.description}}

          </p>

          <!-- Features -->
          <div class="flex flex-wrap gap-3 mb-10">

            @for(feature of service.features; track feature){

            <div
              class="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">

              <i class="pi pi-check-circle text-cyan-400"></i>

              <span class="text-sm font-medium text-slate-200">

                {{feature}}

              </span>

            </div>

            }

          </div>

          <!-- CTA -->
          <button
            class="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105">

            Learn More

            <i class="pi pi-arrow-right"></i>

          </button>

        </div>

      </div>

      }

    </div>

  </div>

</section>
  `
})
export class ServicesComponent {
  services = [
    {
      title: 'Website Development',
      icon: 'pi pi-globe',
      description: 'We create high-performance, SEO-optimized websites that serve as the digital face of your business. From static landing pages to complex dynamic portals, we focus on speed, accessibility, and conversion.',
      features: ['Custom Responsive Design', 'SEO Optimization', 'Fast Loading Speed', 'Accessibility (WCAG AA)', 'Cross-browser Compatibility', 'Conversion Optimized UI']
    },
    {
      title: 'RAGs & MCP Servers',
      icon: 'pi pi-cpu',
      description: 'Harness the power of Generative AI with Retrieval Augmented Generation (RAG) and Model Context Protocol (MCP) servers. We build intelligent systems that can reason over your private data securely.',
      features: ['Custom Knowledge Bases', 'Secure Data Indexing', 'Low-latency AI Responses', 'Scalable API Architectures', 'Private Cloud Deployment', 'Advanced Prompt Engineering']
    },
    {
      title: 'Custom Software Solutions',
      icon: 'pi pi-code',
      description: 'Off-the-shelf software often falls short. We build tailor-made enterprise solutions that automate your specific workflows and eliminate operational bottlenecks.',
      features: ['Enterprise-grade Architecture', 'Workflow Automation', 'Custom API Integrations', 'Scalable Cloud Backend', 'Rigorous Testing & QA', 'Ongoing Maintenance']
    },
    {
      title: 'Billboard Software Systems',
      icon: 'pi pi- exogenous',
      description: 'Transform your physical advertising with our digital billboard management software. Control your content remotely and update your displays in real-time across any location.',
      features: ['Remote Content Control', 'Real-time Updates', 'Scheduling Engine', 'Multi-screen Management', 'Health Monitoring', 'Dynamic Content Rotation']
    },
    {
      title: 'Management Applications',
      icon: 'pi pi-database',
      description: 'Streamline your operations with dedicated management systems. We specialize in high-traffic admin panels for hospitals, hotels, and restaurant chains.',
      features: ['Custom Admin Dashboards', 'Real-time Reporting', 'User Access Control', 'Inventory Tracking', 'Patient/Guest Management', 'Analytical Insights']
    },
    {
      title: 'E-commerce Platforms',
      icon: 'pi pi-shopping-cart',
      description: 'Scale your sales with a custom e-commerce experience. We go beyond templates to provide a shopping journey that is fast, secure, and tailored to your brand.',
      features: ['Custom Storefronts', 'Secure Payment Gateway', 'Automated Inventory', 'Advanced Filtering', 'Order Management System', 'Mobile-first Shopping']
    }
  ];
}
