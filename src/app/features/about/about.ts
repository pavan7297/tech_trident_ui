import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-[#452829] mb-4">About Tech Trident</h1>
        <p class="text-lg text-[#57595B] max-w-2xl mx-auto">
          We are a technology-driven development agency focused on delivering scalable and efficient
          digital solutions.
        </p>
        <div class="w-24 h-1.5 bg-[#452829] mx-auto rounded-full mt-6"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div class="relative">
          <div
            class="aspect-[2/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl group relative"
          >
            <!-- Image -->
            <img
              src="assets/team.png"
              alt="Team Photo"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <!-- (Optional) Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-gray-300/30 to-gray-400/30"></div>
          </div>
          <div
            class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
          >
            <p class="text-3xl font-bold text-[#452829]">50+</p>
            <p class="text-sm text-[#57595B] font-medium">Projects Delivered</p>
          </div>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-[#452829] mb-6">Our Mission</h2>
          <p class="text-xl text-[#57595B] leading-relaxed mb-8">
            To empower businesses through innovative and reliable software solutions. We believe
            that technology should be an enabler, not a barrier, and we strive to create systems
            that are both powerful and intuitive.
          </p>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div
                class="flex-shrink-0 w-10 h-10 bg-[#F3E8DF] rounded-full flex items-center justify-center"
              >
                <i class="pi pi-shield text-[#452829]"></i>
              </div>
              <div>
                <h4 class="font-bold text-[#452829]">Quality First</h4>
                <p class="text-sm text-[#57595B]">
                  We adhere to the highest standards of code quality and security.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                class="flex-shrink-0 w-10 h-10 bg-[#F3E8DF] rounded-full flex items-center justify-center"
              >
                <i class="pi pi-sync text-[#452829]"></i>
              </div>
              <div>
                <h4 class="font-bold text-[#452829]">Agile Delivery</h4>
                <p class="text-sm text-[#57595B]">
                  Rapid prototyping and iterative development for faster time-to-market.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                class="flex-shrink-0 w-10 h-10 bg-[#F3E8DF] rounded-full flex items-center justify-center"
              >
                <i class="pi pi-cog text-[#452829]"></i>
              </div>
              <div>
                <h4 class="font-bold text-[#452829]">Scalable Vision</h4>
                <p class="text-sm text-[#57595B]">
                  We build for today and architect for tomorrow's growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#452829] text-white rounded-3xl p-12 text-center relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#E8D1C5] rounded-full blur-3xl"></div>
          <div
            class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#E8D1C5] rounded-full blur-3xl"
          ></div>
        </div>
        <div class="relative z-10">
          <h2 class="text-3xl font-bold mb-6">Our Vision</h2>
          <p class="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            To become a leading provider of custom digital systems across industries, known for our
            technical excellence and our ability to solve the most complex business challenges with
            elegant and efficient code.
          </p>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}
