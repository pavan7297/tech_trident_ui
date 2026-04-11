import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-[#452829] mb-4">Insights & Articles</h1>
        <p class="text-lg text-[#57595B] max-w-2xl mx-auto">Exploring the latest in AI, software architecture, and digital transformation.</p>
        <div class="w-24 h-1.5 bg-[#452829] mx-auto rounded-full mt-6"></div>
      </div>

      <div class="flex flex-col md:flex-row gap-12">
        <!-- Sidebar -->
        <aside class="w-full md:w-1/4 space-y-12">
          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 class="text-lg font-bold text-[#452829] mb-6">Categories</h3>
            <div class="flex flex-col gap-3">
              @for (cat of categories; track cat) {
                <a (click)="filterCategory(cat)" class="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-[#F3E8DF] transition-all group">
                  <span class="text-sm font-medium text-[#57595B] group-hover:text-[#452829]">{{ cat }}</span>
                  <span class="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">{{ getCount(cat) }}</span>
                </a>
              }
            </div>
          </div>

          <div class="bg-[#452829] p-6 rounded-3xl text-white">
            <h3 class="text-lg font-bold mb-4">Subscribe</h3>
            <p class="text-sm opacity-70 mb-6">Get latest insights delivered to your inbox.</p>
            <div class="flex flex-col gap-3">
              <input type="email" placeholder="Email address" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30">
              <button class="w-full bg-[#E8D1C5] text-[#452829] py-3 rounded-xl font-bold hover:bg-white transition-all">Subscribe</button>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="w-full md:w-3/4">
          <div class="mb-8 flex items-center justify-between">
            <div class="relative w-full max-w-md">
              <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input (input)="updateSearch($event)" type="text" placeholder="Search articles..." class="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#452829] transition-all">
            </div>
          </div>

          <div class="grid grid-cols-1 gap-8">
            @for (post of filteredPosts(); track post.id) {
              <article class="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div class="flex flex-col md:flex-row gap-8">
                  <div class="w-full md:w-1/3 aspect-video bg-gray-200 rounded-2xl relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-gray-400 italic">Post Image</div>
                  </div>
                  <div class="w-full md:w-2/3">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="text-xs font-bold uppercase tracking-widest text-[#452829] bg-[#F3E8DF] px-2 py-1 rounded-md">{{ post.category }}</span>
                      <span class="text-xs text-gray-400">{{ post.date }}</span>
                    </div>
                    <h2 class="text-2xl font-bold text-[#452829] mb-3 hover:text-[#57595B] cursor-pointer transition-colors">{{ post.title }}</h2>
                    <p class="text-[#57595B] mb-6 leading-relaxed line-clamp-3">{{ post.excerpt }}</p>

                    <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div class="flex flex-wrap gap-2">
                        @for (tag of post.tags; track tag) {
                          <span class="text-[10px] text-gray-400 font-medium">#{{ tag }}</span>
                        }
                      </div>
                      <a [routerLink]="['/blog', post.id]" class="text-[#452829] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        Read More <i class="pi pi-arrow-right text-xs"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            } @empty {
              <div class="text-center py-20">
                <i class="pi pi-search text-5xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">No articles found matching your criteria.</p>
              </div>
            }
          </div>
        </main>
      </div>
    </div>
  `
})
export class BlogComponent {
  posts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'Implementing RAG Systems for Enterprise Data',
      category: 'AI & ML',
      excerpt: 'How to build a secure retrieval augmented generation system that allows LLMs to reason over private company documents without leaking data.',
      content: 'Full content here...',
      date: 'Apr 09, 2026',
      tags: ['rag', 'ai', 'enterprise', 'vector-db']
    },
    {
      id: 2,
      title: 'Scaling Angular Applications in 2026',
      category: 'Frontend',
      excerpt: 'Deep dive into signals, standalone components, and the new hydration patterns for high-performance web apps.',
      content: 'Full content here...',
      date: 'Apr 07, 2026',
      tags: ['angular', 'frontend', 'signals', 'performance']
    },
    {
      id: 3,
      title: 'The Future of Model Context Protocol (MCP)',
      category: 'Architecture',
      excerpt: 'Exploring how the Model Context Protocol is standardizing the way AI models interact with external tools and data sources.',
      content: 'Full content here...',
      date: 'Apr 05, 2026',
      tags: ['mcp', 'ai', 'standardization', 'architecture']
    },
    {
      id: 4,
      title: 'Designing Accessible UI for complex Dashboards',
      category: 'Frontend',
      excerpt: ' la guide to creating data-heavy admin panels that are fully WCAG AA compliant and intuitive for all users.',
      content: 'Full content here...',
      date: 'Apr 02, 2026',
      tags: ['accessibility', 'ui', 'ux', 'dashboards']
    },
    {
      id: 5,
      title: 'Optimizing PostgreSQL for High-Read Workloads',
      category: 'Backend',
      excerpt: 'Techniques for indexing and query optimization to handle millions of requests per second in e-commerce systems.',
      content: 'Full content here...',
      date: 'Apr 01, 2026',
      tags: ['postgresql', 'backend', 'sql', 'optimization']
    }
  ]);

  selectedCategory = signal<string | null>(null);
  searchQuery = signal('');

  categories = ['AI & ML', 'Frontend', 'Architecture', 'Backend'];

  filteredPosts = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const cat = this.selectedCategory();

    return this.posts().filter(post => {
      const matchesSearch = !query || post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query);
      const matchesCat = !cat || post.category === cat;
      return matchesSearch && matchesCat;
    });
  });

  updateSearch(event: any) {
    this.searchQuery.set(event.target.value);
  }

  filterCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  getCount(cat: string) {
    return this.posts().filter(p => p.category === cat).length;
  }
}
