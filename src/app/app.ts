import { Component, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from './core/components/footer';
import { HeaderComponent } from './core/components/header';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen transition-colors duration-300">
      <app-header
        (toggleDarkMode)="toggleDarkMode()"
        [darkMode]="isDarkMode()"
      />
      <main class="min-h-screen">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,

})
export class App {
  protected readonly title = signal('Tech Trident');
  isDarkMode = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      // ✅ Run only in browser
      if (isPlatformBrowser(this.platformId)) {
        if (this.isDarkMode()) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }
    });
  }

  toggleDarkMode() {
    this.isDarkMode.update(val => !val);
  }
}
