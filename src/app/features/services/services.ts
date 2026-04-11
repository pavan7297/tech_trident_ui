import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-[#452829] mb-4">Our Specialized Services</h1>
        <p class="text-lg text-[#57595B] max-w-2xl mx-auto">We provide end-to-end digital solutions designed to scale and perform. Our expertise spans from AI-powered systems to enterprise management tools.</p>
        <div class="w-24 h-1.5 bg-[#452829] mx-auto rounded-full mt-6"></div>
      </div>

      <div class="grid grid-cols-1 gap-16">
        @for (service of services; track service.title) {
          <div class="flex flex-col md:flex-row gap-12 items-start group">
            <div class="w-full md:w-1/3">
              <div class="sticky top-24">
                <div class="w-16 h-16 bg-[#F3E8DF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E8D1C5] transition-colors">
                  <i [class]="service.icon" class="text-3xl text-[#452829]"></i>
                </div>
                <h2 class="text-3xl font-bold text-[#452829] mb-4">{{ service.title }}</h2>
                <div class="h-1 w-12 bg-[#452829] rounded-full mb-6"></div>
              </div>
            </div>
            <div class="w-full md:w-2/3 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <p class="text-xl text-[#57595B] leading-relaxed mb-8">
                {{ service.description }}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                @for (feature of service.features; track feature) {
                  <div class="flex items-center gap-3 text-[#57595B]">
                    <i class="pi pi-check-circle text-[#452829]"></i>
                    <span class="text-sm font-medium">{{ feature }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </div>
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
