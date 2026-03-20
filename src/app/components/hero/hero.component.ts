import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit {
  private isBrowser: boolean;
  currentRole = '';
  roles = [
    'Software Quality Engineer',
    'Full Stack Developer',
    'DevOps Specialist',
    'Test Automation Expert'
  ];
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;

  stats = [
    { value: 7, label: 'Projects Completed', current: 0 },
    { value: 5, label: 'Years Experience', current: 0 },
    { value: 3, label: 'Companies', current: 0 }
  ];

  floatingCards = [
    { icon: 'bi-shield-check', label: 'Code Quality', class: 'card-1' },
    { icon: 'bi-code-slash', label: 'Full Stack', class: 'card-2' },
    { icon: 'bi-gear', label: 'CI/CD & DevOps', class: 'card-3' }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.isBrowser) {
      // Start typing and counters on next macrotask to avoid
      // ExpressionChangedAfterItHasBeenCheckedError in dev mode.
      setTimeout(() => {
        this.startTyping();
        this.animateCounters();
      });
    }
  }

  private startTyping() {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const currentText = this.roles[this.roleIndex];
      
      if (!this.isDeleting) {
        this.currentRole = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;
        
        if (this.charIndex === currentText.length) {
          this.isDeleting = true;
          setTimeout(type, pauseTime);
          return;
        }
      } else {
        this.currentRole = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;
        
        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        }
      }
      
      setTimeout(type, this.isDeleting ? deleteSpeed : typeSpeed);
    };
    
    type();
  }

  private animateCounters() {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    this.stats.forEach((stat, index) => {
      setTimeout(() => {
        let current = 0;
        const increment = stat.value / steps;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            stat.current = stat.value;
            clearInterval(counter);
          } else {
            stat.current = Math.floor(current);
          }
        }, stepDuration);
      }, index * 200);
    });
  }

  scrollToSection(sectionId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
