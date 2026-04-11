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
        <p class="text-lg text-[#57595B] max-w-2xl mx-auto">Explore our successful collaborations and the technical challenges we've solved for our clients.</p>
        <div class="w-24 h-1.5 bg-[#452829] mx-auto rounded-full mt-6"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        @for (project of projects; track project.title) {
          <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div class="aspect-video bg-gray-200 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-500"></div>
              <div class="absolute inset-0 flex items-center justify-center text-gray-400 italic">
                Project Screenshot
              </div>
            </div>
            <div class="p-8 flex flex-col h-full">
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tech of project.tech; track tech) {
                  <span class="text-[10px] uppercase tracking-wider bg-[#F3E8DF] text-[#452829] px-2 py-1 rounded-md font-semibold">{{ tech }}</span>
                }
              </div>
              <h2 class="text-2xl font-bold text-[#452829] mb-3">{{ project.title }}</h2>
              <p class="text-[#57595B] mb-6 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="mb-8 p-4 bg-[#F3E8DF]/50 rounded-2xl">
                <h4 class="text-xs uppercase tracking-widest font-bold text-[#452829] mb-2">Problem Solved</h4>
                <p class="text-sm text-[#57595B] italic">"{{ project.problem }}"</p>
              </div>
              <div class="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                <span class="text-sm font-medium text-[#57595B]">Case Study</span>
                <a href="#" class="text-[#452829] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  View Details <i class="pi pi-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class PortfolioComponent {
  projects = [
    {
      title: 'MB Careers',
      description: 'A comprehensive job portal platform featuring complex role-based access control, real-time application tracking, and an intuitive admin dashboard for recruiters.',
      problem: 'Needed a scalable way to manage thousands of job applications while providing a seamless experience for both candidates and employers.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker']
    },
    {
      title: 'MB Solutions',
      description: 'A high-conversion business services website focused on lead generation. Integrated a custom CRM pipeline to automate the onboarding process.',
      problem: 'Low conversion rates due to poor UX and lack of automated lead capture mechanisms.',
      tech: ['Angular', 'Tailwind CSS', 'Node.js', 'MongoDB']
    },
    {
      title: 'ISST',
      description: 'An institutional website focusing on educational management. Includes student enrollment portals, course management, and academic scheduling.',
      problem: 'Fragmented student data and manual enrollment processes causing administrative delays.',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'AWS']
    },
    {
      title: 'Digital Godavari',
      description: 'A regional content and media platform. Built with a focus on dynamic content delivery and high-performance media rendering.',
      problem: 'Slow page loads and poor mobile experience for a media-heavy regional platform.',
      tech: ['Angular', 'Spring Boot', 'Redis', 'Cloudflare']
    },
    {
      title: 'Blogging Platform',
      description: 'An SEO-centric blog system with a custom CMS. Features an automated topic-matching algorithm to suggest related content.',
      problem: 'Poor organic reach and difficulty in managing content categories across a growing number of posts.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'ElasticSearch']
    }
  ];
}
