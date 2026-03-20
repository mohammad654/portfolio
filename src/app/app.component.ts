import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    MethodologyComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <!-- Page Loader -->
    <div class="page-loader" [class.hidden]="!isLoading">
      <div class="loader"></div>
    </div>

    <!-- Scroll Progress Indicator -->
    <div class="scroll-indicator">
      <div class="progress" [style.width.%]="scrollProgress"></div>
    </div>

    <!-- Main Content -->
    <app-header></app-header>
    <main id="main">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-methodology></app-methodology>
      <app-resume></app-resume>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>

    <!-- Back to Top Button -->
    <a class="back-to-top" [class.visible]="showBackToTop" (click)="scrollToTop()">
      <i class="bi bi-arrow-up"></i>
    </a>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent implements OnInit {
  isLoading = true;
  showBackToTop = false;
  scrollProgress = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Hide loader after content loads
      setTimeout(() => {
        this.isLoading = false;
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
        }
      }, 1000);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isBrowser) {
      // Back to top visibility
      this.showBackToTop = window.scrollY > 300;

      // Scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = (window.scrollY / docHeight) * 100;
    }
  }

  scrollToTop() {
    if (this.isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
