import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';
  private isBrowser: boolean;

  navItems = [
    { id: 'hero', label: 'Home', icon: 'bi-house' },
    { id: 'about', label: 'About', icon: 'bi-person' },
    { id: 'skills', label: 'Skills', icon: 'bi-graph-up' },
    { id: 'methodology', label: 'TMAP', icon: 'bi-diagram-3' },
    { id: 'resume', label: 'Resume', icon: 'bi-file-earmark-text' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScroll();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isBrowser) {
      this.checkScroll();
      this.updateActiveSection();
    }
  }

  private checkScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  private updateActiveSection() {
    const sections = this.navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeSection = this.navItems[index].id;
        }
      }
    });
  }

  scrollToSection(sectionId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
