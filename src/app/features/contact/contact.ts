import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
<section class="relative overflow-hidden bg-[#020617] py-24 isolate">

  <!-- Premium Background -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">

    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#07142B] to-slate-950">
    </div>

    <div
      class="absolute -top-60 -left-40 w-[45rem] h-[45rem] rounded-full bg-cyan-500/15 blur-[200px] animate-pulse">
    </div>

    <div
      class="absolute top-20 -right-52 w-[40rem] h-[40rem] rounded-full bg-blue-500/15 blur-[180px] animate-pulse"
      style="animation-delay:2s">
    </div>

    <div
      class="absolute bottom-0 left-1/3 w-[35rem] h-[35rem] rounded-full bg-violet-500/15 blur-[180px] animate-pulse"
      style="animation-delay:4s">
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

    <!-- Heading -->
    <div class="text-center max-w-4xl mx-auto mb-20">

      <span
        class="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-semibold">

        <i class="pi pi-send"></i>

        Contact Us

      </span>

      <h2
        class="mt-8 text-5xl md:text-7xl font-black text-white">

        Let's Build Something

        <span
          class="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">

          Amazing

        </span>

      </h2>

      <p
        class="mt-8 text-xl text-slate-300 leading-9 max-w-3xl mx-auto">

        Whether you're launching a startup, scaling your business,
        or building an enterprise solution, our team is ready to
        turn your ideas into reality.

      </p>

    </div>

    <div class="grid lg:grid-cols-2 gap-12">

      <!-- Contact Form -->
      <div
        class="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">

        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="space-y-6">

          <div class="grid md:grid-cols-2 gap-6">

            <div>

              <label class="block mb-2 text-sm font-semibold text-slate-300">
                Full Name
              </label>

              <input
                formControlName="name"
                type="text"
                placeholder="John Doe"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none transition">

            </div>

            <div>

              <label class="block mb-2 text-sm font-semibold text-slate-300">
                Email
              </label>

              <input
                formControlName="email"
                type="email"
                placeholder="john@example.com"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none transition">

            </div>

          </div>

          <div>

            <label class="block mb-2 text-sm font-semibold text-slate-300">
              Phone Number
            </label>

            <input
              formControlName="phone"
              type="tel"
              placeholder="+91 9502214310"
              class="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none transition">

          </div>

          <div>

            <label class="block mb-2 text-sm font-semibold text-slate-300">
              Project Details
            </label>

            <textarea
              formControlName="message"
              rows="6"
              placeholder="Tell us about your project..."
              class="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none transition">
            </textarea>

          </div>

          <button
            type="submit"
            [disabled]="contactForm.invalid"
            class="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,.45)] disabled:opacity-50">

            Send Message

            <i class="pi pi-arrow-right ml-2"></i>

          </button>

        </form>

      </div>

      <!-- Contact Details -->
      <div class="space-y-8">

        <div
          class="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition">

          <div class="flex items-center gap-5">

            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">

              <i class="pi pi-envelope text-2xl text-white"></i>

            </div>

            <div>

              <h3 class="text-2xl font-bold text-white">
                Email
              </h3>

              <p class="text-slate-300">
                webworks62@gmail.com
              </p>

            </div>

          </div>

        </div>

        <div
          class="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/40 transition">

          <div class="flex items-center gap-5">

            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">

              <i class="pi pi-phone text-2xl text-white"></i>

            </div>

            <div>

              <h3 class="text-2xl font-bold text-white">
                Phone
              </h3>

              <p class="text-slate-300">
                +91 9502214310
              </p>

            </div>

          </div>

        </div>

        <div
          class="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

          <!-- Replace this with your Google Maps iframe -->
          <div
            class="h-80 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-slate-400">

            <div class="text-center">

              <i class="pi pi-map-marker text-5xl mb-4 text-cyan-400"></i>

              <p class="text-lg">
                Google Map Integration
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
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
