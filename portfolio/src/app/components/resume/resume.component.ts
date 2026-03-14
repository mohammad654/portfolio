import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
  current?: boolean;
  images?: { src: string; alt: string; caption?: string }[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  
  // Lightbox state
  lightboxOpen = false;
  lightboxImage = '';
  lightboxCaption = '';

  openLightbox(img: { src: string; alt: string; caption?: string }) {
    this.lightboxImage = img.src;
    this.lightboxCaption = img.caption || img.alt;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  experiences: Experience[] = [
    {
      role: 'Software Quality Engineer - CCQAT',
      company: 'Capgemini Engineering',
      period: 'May 2025 - Present',
      description: 'CCQAT is an automated code analysis and reporting system designed to evaluate C/C++ codebases for quality metrics, security vulnerabilities, and maintainability issues. Generates comprehensive HTML and PDF reports with detailed visualizations.',
      achievements: [
        'Integrated cppcheck, lizard, clang, cloc, and doxygen in unified Docker setup',
        'Optimized analysis for million+ line codebases with caching and parallel processing',
        'Delivered branded HTML dashboards and PDF reports with insightful visualizations',
        'Integrated with Jenkins, GitHub Actions, and GitLab for automated CI/CD quality checks',
        'Reduced analysis time by up to 70% through smart caching implementation',
        'Automated detection of security flaws and coding violations'
      ],
      logo: '/images/Capgemini-Engineering.png',
      current: true,
      images: [
        { src: '/images/ccqat1.png', alt: 'CCQAT Dashboard', caption: 'Interactive Code Quality Dashboard' },
        { src: '/images/ccqat2.png', alt: 'CCQAT Report', caption: 'Comprehensive Analysis Report' }
      ]
    },
    {
      role: 'Software Engineer - CPD Team',
      company: 'ASML',
      period: 'September 2024 - March 2025',
      description: 'Led manufacturing efforts in advanced chip technology. Responsible for calibrating machine constants, measuring performance, and diagnosing issues.',
      achievements: [
        'Developed and managed JNOWV2 CPD measurement system using Python',
        'Ensured precise wafer stage positioning and movement accuracy',
        'Worked in Linux Red Hat environment with DevBench application',
        'Built, unit tested, and debugged applications without hardware dependencies'
      ],
      logo: '/images/asml.png'
    },
    {
      role: 'Innovation Project Developer',
      company: 'Capgemini Engineering - Hydrohaus',
      period: 'February 2023 - September 2024',
      description: 'Created autonomous hydroponic system for efficient plant growth with full environmental control and power optimization.',
      achievements: [
        'Developed software systems using Python and Angular',
        'Implemented test automation with Selenium and Robot Framework',
        'Applied Scrum & Agile methodologies and TDD practices',
        'Integrated IoT sensors for environmental monitoring'
      ],
      logo: '/images/Capgemini-Engineering.png',
      images: [
        { src: '/images/Hydrohaus1.png', alt: 'Hydrohaus System', caption: 'Autonomous Hydroponic System' },
        { src: '/images/Hydrohaus_dashboard.png', alt: 'Hydrohaus Dashboard', caption: 'System Dashboard' },
        { src: '/images/Hydrohaus_health.png', alt: 'Hydrohaus Health', caption: 'Plant Health Monitoring' },
        { src: '/images/Hydrohaus_release.png', alt: 'Hydrohaus Release', caption: 'Release Management' }
      ]
    },
    {
      role: 'Software Engineering Track',
      company: 'Capgemini Academy',
      period: 'March 2023 - September 2023',
      description: '6-month intensive program creating "Notflix" (Netflix clone) using full-stack technologies.',
      achievements: [
        'Front-end development with Angular and TypeScript',
        'Back-end development with Java Spring Boot',
        'Agile project management and Scrum methodologies',
        'Database integration with MySQL'
      ],
      logo: '/images/Capgemini-Engineering.png'
    },
    {
      role: 'Software Development Intern',
      company: 'New Penguins',
      period: 'August 2019 - January 2020',
      description: '6-month internship gaining proficiency in modern web technologies and frameworks.',
      achievements: [
        'Angular, JavaScript, jQuery, Bootstrap development',
        'TypeScript and Node.js backend development',
        'Java with Spring Boot application development'
      ]
    }
  ];

  education: Education[] = [
    {
      degree: 'Energy Transition and Utilities Industry Certification',
      institution: 'Capgemini',
      period: '2024',
      description: `Completed Level 1 Certification in Energy Transition and Utilities through Capgemini's Industry Campus program (May 2024). This certification demonstrates:\n\n- Comprehensive understanding of energy transition fundamentals\n- Knowledge of electricity markets and smart grid technologies\n- Proficiency in oil & gas industry transformations\n- Familiarity with sustainable water management practices\n\nThis industry-recognized credential enhances client engagement capabilities and strengthens professional credibility in the rapidly evolving energy sector.`
    },
    {
      degree: 'C++/C Programming Certification',
      institution: 'CPA - C++ Institute',
      period: '2024',
      description: 'Professional certification validating deep understanding of C++ programming concepts, memory management, and object-oriented programming.'
    },
    {
      degree: 'Application Developer Program',
      institution: 'Netherlands',
      period: '2020 - 2022',
      description: 'Intensive courses in Java, C++, algorithms, and software development principles. Transitioned from agriculture background to software engineering.'
    },
    {
      degree: 'Agricultural Technology Engineer',
      institution: 'Al-Furat University, Syria',
      period: '2014 - 2019',
      description: '5-year comprehensive program in Agriculture, providing foundation in systematic thinking and problem-solving that later influenced interest in automation and technology solutions.'
    }
  ];

  activeTab: 'experience' | 'education' = 'experience';

  setActiveTab(tab: 'experience' | 'education') {
    this.activeTab = tab;
  }

  // Attempt to download a local resume.pdf; fallback to a public sample PDF if not found
  async downloadCV(event: Event) {
    event.preventDefault();
    const candidates = [
      '/resume.pdf',
      '/assets/resume.pdf',
      '/assets/Resume-Mohammad-Ali.pdf'
    ];
    const fallback = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

    for (const path of candidates) {
      try {
        const resp = await fetch(path, { method: 'HEAD' });
        if (resp.ok) {
          const a = document.createElement('a');
          a.href = path;
          a.download = 'Resume-Mohammad-Ali.pdf';
          document.body.appendChild(a);
          a.click();
          a.remove();
          return;
        }
      } catch (e) {
        // ignore and continue to next candidate
      }
    }

    // fallback: open sample PDF in new tab
    window.open(fallback, '_blank', 'noopener');
  }
}
