import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'Kurdish', level: 'Native' },
    { name: 'Dutch', level: 'Fluent' },
    { name: 'English', level: 'Professional' }
  ];

  skillCategories = [
    {
      icon: 'bi-code-slash',
      title: 'Backend Development',
      description: 'Java, Spring Boot, Python, C++/C',
      color: '#065cc2'
    },
    {
      icon: 'bi-palette',
      title: 'Frontend Development',
      description: 'Angular, TypeScript, JavaScript, Bootstrap',
      color: '#13447f'
    },
    {
      icon: 'bi-shield-check',
      title: 'Testing & Automation',
      description: 'Selenium, Robot Framework, Unit Testing',
      color: '#2973cc'
    },
    {
      icon: 'bi-tools',
      title: 'DevOps & Tools',
      description: 'Git, Linux, Docker, CI/CD',
      color: '#314862'
    }
  ];

interests = [
    {
      icon: 'bi-book',
      label: 'Reading',
      short: 'Enhances language skills, sharpens focus, and opens doorways to countless imaginary worlds.'
    },
    {
      icon: 'bi-pen',
      label: 'Writing',
      short: 'Unleashes creative expression, strengthens memory, and transforms abstract ideas into tangible content.'
    },
    {
      icon: 'bi-water',
      label: 'Swimming',
      short: 'Builds full-body fitness, promotes quality sleep, and offers refreshing enjoyment.'
    },
    {
      icon: 'bi-heart-pulse',
      label: 'Fitness',
      short: 'Boosts energy levels, strengthens muscles, and enhances flexibility for optimal health.'
    }
];
}
