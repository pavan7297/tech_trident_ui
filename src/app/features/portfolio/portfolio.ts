import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  template: `
<section class="relative overflow-hidden bg-[#020617] py-24 isolate">

  <!-- ================= Premium Background ================= -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">

    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#07142B] to-slate-950"></div>

    <div
      class="absolute -top-60 -left-32 w-[45rem] h-[45rem] rounded-full bg-cyan-500/15 blur-[200px] animate-pulse">
    </div>

    <div
      class="absolute top-20 -right-52 w-[40rem] h-[40rem] rounded-full bg-blue-500/15 blur-[180px] animate-pulse"
      style="animation-delay:2s">
    </div>

    <div
      class="absolute bottom-0 left-1/3 w-[36rem] h-[36rem] rounded-full bg-violet-500/15 blur-[180px] animate-pulse"
      style="animation-delay:4s">
    </div>

    <div
      class="absolute inset-0 opacity-[0.05]"
      style="
      background-image:
      linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),
      linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);
      background-size:70px 70px;">
    </div>

  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6">

    <!-- Heading -->
    <div class="text-center max-w-4xl mx-auto mb-20">

      <span
        class="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-semibold">

        <i class="pi pi-briefcase"></i>

        Our Portfolio

      </span>

      <h2
        class="mt-8 text-5xl md:text-7xl font-black text-white">

        Building

        <span
          class="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">

          Exceptional Products

        </span>

      </h2>

      <p
        class="mt-8 text-xl text-slate-300 leading-9 max-w-3xl mx-auto">

        Discover how we've helped startups and enterprises transform
        their ideas into scalable digital products through innovative
        engineering and modern technologies.

      </p>

    </div>

    <!-- Portfolio Grid -->
    <div class="grid lg:grid-cols-2 gap-10">

      @for(project of projects; track project.title){

      <article
        class="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_35px_90px_rgba(6,182,212,.25)]">

        <!-- Image -->
        <div class="relative aspect-video overflow-hidden">

          <img
            [src]="project.img"
            [alt]="project.title"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-110">

          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
          </div>

          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

            <div
              class="rounded-full bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 text-white font-semibold">

              <i class="pi pi-eye mr-2"></i>

              View Project

            </div>

          </div>

        </div>

        <!-- Content -->
        <div class="p-8">

          <!-- Tech -->
          <div class="flex flex-wrap gap-3 mb-6">

            @for(tech of project.tech; track tech){

            <span
              class="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">

              {{tech}}

            </span>

            }

          </div>

          <h3
            class="text-3xl font-bold text-white mb-4">

            {{project.title}}

          </h3>

          <p
            class="text-slate-300 leading-8 mb-8">

            {{project.description}}

          </p>

          <!-- Problem -->
          <div
            class="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6 mb-8">

            <h4
              class="text-sm uppercase tracking-widest font-bold text-violet-300 mb-3">

              Challenge Solved

            </h4>

            <p
              class="italic text-slate-300">

              "{{project.problem}}"

            </p>

          </div>

          <!-- Footer -->
          <div
            class="border-t border-white/10 pt-6 flex items-center justify-between">

            <span
              class="text-slate-400">

              Case Study

            </span>

            <a
              [href]="project.link"
              target="_blank"
              class="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-5 py-3 text-white font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,.45)]">

              View Details

              <i class="pi pi-arrow-right"></i>

            </a>

          </div>

        </div>

      </article>

      }

    </div>

  </div>

</section>
  `,
})
export class PortfolioComponent {
  projects = [
    {
      title: 'MB Careers',
      description:
        'An admissions management system designed to collect, process, and visualize student application data through powerful dashboards.',
      problem:
        'Manual admission tracking and scattered student data made it difficult to analyze and manage applications efficiently.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      link: 'https://www.mbcareersolutions.in/',
      img: '/assets/sites/scr1.png',
    },
    {
      title: 'MB Solutions',
      description:
        'A business services showcase platform that highlights offerings and captures leads through enquiry forms.',
      problem:
        'Lack of a structured platform to present services and capture potential client enquiries effectively.',
      tech: ['Angular', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      link: 'https://services.mbcareersolutions.in/',
      img: '/assets/sites/scr2.png',
    },
    {
      title: 'ISST',
      description:
        'An institutional website for managing courses, student enrollments, and academic operations in one unified system.',
      problem:
        'Inefficient manual processes and disconnected systems for handling institutional data and student workflows.',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'AWS'],
      link: 'https://isst.mbcareersolutions.in/',
      img: '/assets/sites/scr4.png',
    },
    {
      title: 'Behera Website',
      description:
        'An institutional website built to showcase courses, admissions, and key information for students and stakeholders.',
      problem:
        'Lack of a modern digital presence and difficulty in clearly presenting institutional offerings online.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      link: 'https://behera.mbcareersolutions.in/', // update if different
      img: '/assets/sites/scr5.png', // update if different
    },
    {
      title: 'Digital Godavari',
      description:
        'A regional media platform built for fast and dynamic content delivery with a strong focus on performance.',
      problem:
        'Slow-loading pages and poor scalability for media-heavy content affecting user engagement.',
      tech: ['Angular', 'Spring Boot', 'Redis', 'Cloudflare'],
      link: 'https://www.digitalgodavary.com/',
      img: '/assets/sites/scr3.png',
    },
    {
      title: 'Blogging Platform',
      description:
        'A custom CMS-based blogging platform optimized for SEO with intelligent topic recommendations.',
      problem: 'Low organic traffic and difficulty managing growing blog content efficiently.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'ElasticSearch'],
      link: 'https://www.blogs.techtrident.in',
      img: '',
    },
  ];
}
