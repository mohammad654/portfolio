import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

interface Tool {
  name: string;
  image: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  
  private isBrowser: boolean;
  animationTriggered = false;

  skillCategories: SkillCategory[] = [
    {
      icon: 'bi-code-slash',
      title: 'Backend Development',
      skills: [
        { name: 'Java', description: 'Spring Boot apps at Capgemini Academy (Notflix project)' },
        { name: 'Spring Boot', description: 'REST APIs & microservices for full-stack projects' },
        { name: 'Python', description: 'CCQAT analysis tool, ASML measurement systems' },
        { name: 'C++/C', description: 'CPA certified, code analysis at CCQAT project' }
      ]
    },
    {
      icon: 'bi-palette',
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', description: 'Hydrohaus dashboard, portfolio, Notflix clone' },
        { name: 'TypeScript', description: 'All Angular projects with strict typing' },
        { name: 'JavaScript', description: 'Interactive UIs, Node.js backend at internship' },
        { name: 'Bootstrap/SCSS', description: 'Responsive designs across all projects' }
      ]
    },
    {
      icon: 'bi-shield-check',
      title: 'Testing & Automation',
      skills: [
        { name: 'Selenium', description: 'E2E testing for Hydrohaus & Capgemini projects' },
        { name: 'Unit Testing', description: 'Python unittest, JUnit at ASML & CCQAT' },
        { name: 'API Testing', description: 'REST API validation for backend services' },
        { name: 'Robot Framework', description: 'Automated test suites at Hydrohaus' }
      ]
    },
    {
      icon: 'bi-gear',
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', description: 'Version control across all professional projects' },
        { name: 'Linux', description: 'Red Hat environment at ASML, shell scripting' },
        { name: 'Docker', description: 'CCQAT containerized analysis environment' },
        { name: 'CI/CD', description: 'Jenkins, GitHub Actions, GitLab pipelines' }
      ]
    }
  ];

  tools: Tool[] = [
    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776ab' },
    { name: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', color: '#dd0031' },
    { name: 'Spring', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6db33f' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178c6' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#f05032' },
    { name: 'Linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#fcc624' },
    { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ed' },
    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' }
  ];

  certifications = [
    { 
      name: 'Professional Scrum Master', 
      issuer: 'Scrum.org', 
      icon: 'bi-award-fill',
      image: '/images/scrum.png'
    },
    { 
      name: 'C++ Certified Associate', 
      issuer: 'C++ Institute (CPA)', 
      icon: 'bi-file-code-fill',
      image: null
    },
    { 
      name: 'Capgemini SE Track', 
      issuer: 'Capgemini Academy', 
      icon: 'bi-patch-check-fill',
      image: '/images/Capgemini-Engineering.png'
    },
    {
      name: 'Capgemini L1 Industry Certification - Energy Transition & Utilities',
      issuer: 'Capgemini',
      icon: 'bi-patch-check-fill',
      image: null
    }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
