import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-[#452829] mb-4">Get In Touch</h1>
        <p class="text-lg text-[#57595B] max-w-2xl mx-auto">Ready to transform your business? Let's discuss your project and how we can help you scale.</p>
        <div class="w-24 h-1.5 bg-[#452829] mx-auto rounded-full mt-6"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div class="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-[#452829]">Full Name</label>
                <input formControlName="name" type="text" placeholder="Srinivas" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#452829] outline-none transition-all">
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm font-semibold text-[#452829]">Email Address</label>
                <input formControlName="email" type="email" placeholder="srinivas@example.com" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#452829] outline-none transition-all">
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold text-[#452829]">Phone Number</label>
              <input formControlName="phone" type="tel" placeholder="+91 9502214310" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#452829] outline-none transition-all">
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm font-semibold text-[#452829]">Message</label>
              <textarea formControlName="message" rows="5" placeholder="Tell us about your project..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#452829] outline-none transition-all"></textarea>
            </div>

            <button type="submit" [disabled]="contactForm.invalid" class="w-full bg-[#452829] text-white py-4 rounded-full font-bold hover:bg-[#57595B] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
              Send Message
            </button>
          </form>
        </div>

        <div class="flex flex-col gap-12">
          <div class="space-y-8">
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0 w-12 h-12 bg-[#F3E8DF] rounded-2xl flex items-center justify-center">
                <i class="pi pi-envelope text-xl text-[#452829]"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-[#452829]">Email Us</h4>
                <p class="text-[#57595B]">webworks62@gmail.com</p>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0 w-12 h-12 bg-[#F3E8DF] rounded-2xl flex items-center justify-center">
                <i class="pi pi-phone text-xl text-[#452829]"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-[#452829]">Call Us</h4>
                <p class="text-[#57595B]">+91 9502214310</p>
              </div>
            </div>
            <!-- <div class="flex items-start gap-6">
              <div class="flex-shrink-0 w-12 h-12 bg-[#F3E8DF] rounded-2xl flex items-center justify-center">
                <i class="pi pi-map-marker text-xl text-[#452829]"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-[#452829]">Location</h4>
                <p class="text-[#57595B]">Global Delivery Center, Tech Hub Blvd, Silicon Valley</p>
              </div>
            </div>
          </div> -->

          <div class="bg-gray-200 rounded-3xl h-80 relative overflow-hidden shadow-inner">
            <div class="absolute inset-0 flex items-center justify-center text-gray-500 italic">
              Google Map Integration
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    console.log('Form Submitted:', this.contactForm.value);
    alert('Thank you for your message! We will get back to you soon.');
  }
}
