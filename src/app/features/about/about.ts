import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
<section class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24">

    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">

        <div class="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full bg-cyan-400/15 blur-[170px] animate-pulse"></div>

        <div class="absolute top-1/2 -right-48 w-[40rem] h-[40rem] rounded-full bg-blue-500/15 blur-[170px] animate-pulse"
            style="animation-delay:2s"></div>

        <div class="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-violet-500/10 blur-[150px] animate-pulse"
            style="animation-delay:4s"></div>

        <div class="absolute inset-0 opacity-[0.05]"
            style="
                background-image:
                linear-gradient(to right,#64748b 1px,transparent 1px),
                linear-gradient(to bottom,#64748b 1px,transparent 1px);
                background-size:60px 60px;">
        </div>

    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Heading -->
        <div class="text-center mb-24">

            <span
                class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-300 text-cyan-700 font-semibold mb-6">
                <i class="pi pi-building"></i>
                About Tech Trident
            </span>

            <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8">

                Building
                <span
                    class="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Future-Ready
                </span>

                Software
            </h1>

            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We are a technology company helping startups and enterprises build
                modern web applications, AI-powered systems, enterprise software,
                and scalable cloud solutions.
            </p>

            <div
                class="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full mx-auto mt-8">
            </div>

        </div>

        <!-- Content -->
        <div class="grid lg:grid-cols-2 gap-20 items-center">

            <!-- Left -->
            <div class="relative group">

                <div
                    class="relative overflow-hidden rounded-[36px] border border-white/50 bg-white/70 backdrop-blur-xl shadow-2xl">

                    <img src="assets/team.png"
                        class="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                        alt="Tech Trident Team">

                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent">
                    </div>

                </div>

                <!-- Floating Stats -->
                <div
                    class="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white">

                    <div class="text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        50+
                    </div>

                    <p class="text-slate-600 font-semibold mt-2">
                        Successful Projects
                    </p>

                </div>

            </div>

            <!-- Right -->
            <div>

                <h2 class="text-4xl font-bold text-slate-900 mb-8">
                    Empowering Businesses Through Technology
                </h2>

                <p class="text-lg text-slate-600 leading-8 mb-10">
                    Tech Trident specializes in designing and developing modern
                    software solutions that help businesses grow faster. From AI
                    applications and enterprise systems to cloud platforms and
                    mobile applications, we transform ideas into powerful digital
                    products.
                </p>

                <div class="space-y-6">

                    <div
                        class="group flex gap-5 p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-500">

                        <div
                            class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <i class="pi pi-shield text-white text-xl"></i>
                        </div>

                        <div>

                            <h3 class="text-xl font-bold text-slate-900 mb-2">
                                Quality Engineering
                            </h3>

                            <p class="text-slate-600">
                                Every solution is built with security,
                                maintainability, and high performance in mind.
                            </p>

                        </div>

                    </div>

                    <div
                        class="group flex gap-5 p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500">

                        <div
                            class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                            <i class="pi pi-sync text-white text-xl"></i>
                        </div>

                        <div>

                            <h3 class="text-xl font-bold text-slate-900 mb-2">
                                Agile Development
                            </h3>

                            <p class="text-slate-600">
                                Rapid development cycles with continuous delivery,
                                ensuring faster product launches.
                            </p>

                        </div>

                    </div>

                    <div
                        class="group flex gap-5 p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 hover:border-violet-300 hover:shadow-xl transition-all duration-500">

                        <div
                            class="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <i class="pi pi-chart-line text-white text-xl"></i>
                        </div>

                        <div>

                            <h3 class="text-xl font-bold text-slate-900 mb-2">
                                Scalable Architecture
                            </h3>

                            <p class="text-slate-600">
                                Cloud-native systems designed to scale as your
                                business grows.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <!-- Vision Card -->
        <div
            class="relative overflow-hidden mt-28 rounded-[40px] bg-gradient-to-r from-slate-900 via-cyan-900 to-blue-900 text-white p-14">

            <div
                class="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-[150px]">
            </div>

            <div
                class="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-500/20 rounded-full blur-[150px]">
            </div>

            <div class="relative z-10 text-center">

                <span
                    class="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg mb-6">
                    Our Vision
                </span>

                <h2 class="text-4xl md:text-5xl font-bold mb-8">
                    Engineering Digital Excellence
                </h2>

                <p class="text-xl text-slate-200 max-w-4xl mx-auto leading-9">
                    Our vision is to become a globally trusted technology partner,
                    empowering organizations through innovative software, AI-driven
                    solutions, cloud technologies, and enterprise platforms that
                    deliver measurable business impact.
                </p>

            </div>

        </div>

    </div>

</section>
  `,
})
export class AboutComponent { }
