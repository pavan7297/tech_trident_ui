import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col gap-20">
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-[#F3E8DF] py-24 lg:py-32">
        <div class="absolute inset-0 opacity-30 pointer-events-none">
          <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#E8D1C5] rounded-full blur-3xl"></div>
          <div
            class="absolute top-1/2 -right-24 w-96 h-96 bg-[#C8B1A5] rounded-full blur-3xl"
          ></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1
            class="text-5xl md:text-7xl font-bold text-[#452829] mb-6 tracking-tight leading-tight"
          >
            Building Scalable Digital <br class="hidden md:block" />
            Solutions for Modern Businesses
          </h1>
          <p class="text-xl text-[#57595B] max-w-3xl mx-auto mb-10 leading-relaxed">
            Custom software, intelligent systems, and high-performance websites tailored for growth.
            We turn complex challenges into seamless digital experiences.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              routerLink="/contact"
              class="bg-[#452829] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#57595B] transition-all shadow-lg w-full sm:w-auto"
            >
              Get Started
            </a>
            <a
              routerLink="/portfolio"
              class="bg-white text-[#452829] border-2 border-[#452829] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#E8D1C5] transition-all w-full sm:w-auto"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <!-- Services Overview -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-[#452829] mb-4">Our Core Expertise</h2>
          <div class="w-20 h-1.5 bg-[#452829] mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title) {
            <div
              class="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                class="w-14 h-14 bg-[#F3E8DF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E8D1C5] transition-colors"
              >
                <i [class]="service.icon" class="text-2xl text-[#452829]"></i>
              </div>
              <h3 class="text-2xl font-bold text-[#452829] mb-3">{{ service.title }}</h3>
              <p class="text-[#57595B] mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              <a
                routerLink="/services"
                class="text-[#452829] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <i class="pi pi-arrow-right text-sm"></i>
              </a>
            </div>
          }
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="bg-[#452829] text-[#E8D1C5] py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Why Tech Trident is Your <br />
                Best Digital Partner
              </h2>
              <p class="text-lg opacity-80 mb-12 leading-relaxed">
                We don't just write code; we architect solutions that drive business growth. Our
                approach combines technical excellence with a deep understanding of market needs.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                @for (point of highlights; track point.title) {
                  <div class="flex gap-4">
                    <div
                      class="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8D1C5] flex items-center justify-center"
                    >
                      <i class="pi pi-check text-[#452829] text-xs font-bold"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-white mb-1">{{ point.title }}</h4>
                      <p class="text-sm opacity-70">{{ point.text }}</p>
                    </div>
                  </div>
                }
              </div>
            </div>
            <div class="relative">
              <div
                class="aspect-square bg-[#57595B] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
              >
                <i class="pi pi-bolt text-9xl text-[#E8D1C5] opacity-20"></i>
                <div class="absolute inset-0 flex items-center justify-center p-12">
                  <div
                    class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center"
                  >
                    <span class="text-5xl font-bold text-white block mb-2">100%</span>
                    <span class="text-sm uppercase tracking-widest opacity-70"
                      >Custom Solutions</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio Preview -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-5xl font-bold text-[#452829] mb-4">Featured Projects</h2>
            <p class="text-[#57595B]">
              A glimpse into the scalable solutions we've delivered for our clients across various
              industries.
            </p>
          </div>
          <a
            routerLink="/portfolio"
            class="bg-[#452829] text-white px-6 py-3 rounded-full font-medium hover:bg-[#57595B] transition-all"
          >
            View All Work
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (project of featuredProjects; track project.title) {
            <div class="group relative overflow-hidden rounded-3xl bg-gray-200 aspect-[16/10]">
              <!-- Placeholder for screenshot -->
              <div
                class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                [style.background-image]="'url(' + project.img + ')'"
              ></div>

              <div
                class="absolute inset-0 bg-gradient-to-t from-[#452829] via-transparent to-transparent opacity-80"
              ></div>

              <div class="absolute bottom-0 left-0 p-8 text-white">
                <div class="flex gap-2 mb-3">
                  @for (tech of project.tech; track tech) {
                    <span
                      class="text-[10px] uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-1 rounded-md"
                      >{{ tech }}</span
                    >
                  }
                </div>
                <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
                <p class="text-sm opacity-80 mb-4 line-clamp-2">{{ project.description }}</p>
                <a
                  routerLink="/portfolio"
                  class="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-[#E8D1C5] transition-colors"
                >
                  View Details <i class="pi pi-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Process Section -->
      <section class="bg-[#F3E8DF] py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold text-[#452829] mb-4">Our Proven Process</h2>
            <p class="text-[#57595B]">
              From a spark of an idea to a fully deployed scalable system.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            @for (step of processSteps; track step.title) {
              <div class="relative p-6 bg-white rounded-2xl shadow-sm text-center">
                <div
                  class="w-12 h-12 bg-[#452829] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl"
                >
                  {{ $index + 1 }}
                </div>
                <h4 class="font-bold text-[#452829] mb-2">{{ step.title }}</h4>
                <p class="text-xs text-[#57595B]">{{ step.desc }}</p>

                @if ($index < processSteps.length - 1) {
                  <div class="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <i class="pi pi-arrow-right text-[#452829] opacity-30"></i>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div
          class="bg-[#452829] rounded-3xl p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
        >
          <div
            class="absolute -top-10 -right-10 w-64 h-64 bg-[#E8D1C5] rounded-full blur-3xl opacity-20"
          ></div>
          <div class="relative z-10">
            <h2 class="text-3xl md:text-5xl font-bold mb-6">
              Ready to build your next digital product?
            </h2>
            <p class="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create a high-performance solution that scales with your
              business.
            </p>
            <a
              routerLink="/contact"
              class="bg-[#E8D1C5] text-[#452829] px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-all shadow-xl inline-block"
            >
              Contact Us Now
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
