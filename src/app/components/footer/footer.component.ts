import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  socialLinks = [
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/mohammad-ali-shikhi/', label: 'LinkedIn' },
    { icon: 'bi-github', url: 'https://github.com/mohammad654', label: 'GitHub' },
    { icon: 'bi-twitter-x', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'bi-instagram', url: 'https://instagram.com', label: 'Instagram' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
