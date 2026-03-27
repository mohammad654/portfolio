import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

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
  errorMessage = '';
  private dismissTimeout: any = null;

  async onSubmit(form: NgForm) {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.submitStatus = 'idle';
    this.errorMessage = '';
    this.clearDismissTimeout();

    try {
      const subject = encodeURIComponent(this.formData.subject);
      const body = encodeURIComponent(
        `Name: ${this.formData.name}\n` +
        `Email: ${this.formData.email}\n\n` +
        `${this.formData.message}`
      );
      const mailtoUrl = `mailto:mohammad.ali.shikhi.55@gmail.com?subject=${subject}&body=${body}`;

      if (typeof window !== 'undefined') {
        window.location.href = mailtoUrl;
      }

      this.submitStatus = 'success';
      form.resetForm();
      
      // Auto-dismiss success message after 4 seconds
      this.dismissTimeout = setTimeout(() => {
        this.submitStatus = 'idle';
      }, 4000);
    } catch (_error: any) {
      this.submitStatus = 'error';
      this.errorMessage = 'Could not open your email client. Please email me directly at mohammad.ali.shikhi.55@gmail.com.';
      
      // Auto-dismiss error message after 6 seconds
      this.dismissTimeout = setTimeout(() => {
        this.submitStatus = 'idle';
      }, 6000);
    } finally {
      this.isSubmitting = false;
    }
  }

  private clearDismissTimeout() {
    if (this.dismissTimeout) {
      clearTimeout(this.dismissTimeout);
      this.dismissTimeout = null;
    }
  }

  ngOnDestroy() {
    this.clearDismissTimeout();
  }
}
