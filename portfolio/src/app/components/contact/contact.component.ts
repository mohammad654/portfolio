import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Location',
      lines: ['Available for remote work', 'Open to relocate']
    },
    {
      icon: 'bi-telephone',
      title: 'Phone Number',
      lines: ['+31 6 12161341']
    },
    {
      icon: 'bi-envelope',
      title: 'Email Address',
      lines: ['mohammad.ali.shikhi.55@gmail.com']
    }
  ];

  socialLinks = [
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/mohammad-ali-shikhi/', label: 'LinkedIn' },
    { icon: 'bi-github', url: 'https://github.com/mohammad654', label: 'GitHub' },
    { icon: 'bi-twitter-x', url: 'https://twitter.com', label: 'Twitter' }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  async onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.submitStatus = 'idle';

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.submitStatus = 'success';
      this.resetForm();
    } catch {
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
