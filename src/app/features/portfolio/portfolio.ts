import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  template: `
    <div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-[#452829] mb-4">Our Portfolio</h1>
        <p class="text-lg text-[#57595B] max-w-2xl mx-auto">
          Explore our successful collaborations and the technical challenges we've solved for our
          clients.
        </p>
        <div class="w-24 h-1.5 bg-[#452829] mx-auto rounded-full mt-6"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        @for (project of projects; track project.title) {
          <div
            class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <!-- <div class="aspect-video bg-gray-200 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-500"></div>
              <div class="absolute inset-0 flex items-center justify-center text-gray-400 italic">
                Project Screenshot
              </div>
            </div> -->
            <div class="aspect-video bg-gray-200 relative group overflow-hidden">
              <!-- Image -->
              <img
                src="{{ project.img }}"
                alt="Project Screenshot"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <!-- Optional Overlay Text -->
              <div
                class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition"
              >
                View Project
              </div>
            </div>
            <div class="p-8 flex flex-col h-full">
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tech of project.tech; track tech) {
                  <span
                    class="text-[10px] uppercase tracking-wider bg-[#F3E8DF] text-[#452829] px-2 py-1 rounded-md font-semibold"
                    >{{ tech }}</span
                  >
                }
              </div>
              <h2 class="text-2xl font-bold text-[#452829] mb-3">{{ project.title }}</h2>
              <p class="text-[#57595B] mb-6 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="mb-8 p-4 bg-[#F3E8DF]/50 rounded-2xl">
                <h4 class="text-xs uppercase tracking-widest font-bold text-[#452829] mb-2">
                  Problem Solved
                </h4>
                <p class="text-sm text-[#57595B] italic">"{{ project.problem }}"</p>
              </div>
              <div class="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                <span class="text-sm font-medium text-[#57595B]">Case Study</span>
                <a
                  href="{{ project.link }}"
                  class="text-[#452829] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Details <i class="pi pi-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
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
