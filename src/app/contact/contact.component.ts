import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { HeaderComponent } from '../header/header.component';

interface Form {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})

export class ContactComponent {
  form: Form = { name: '', email: '', message: '' };
  error = '';
  submitted = false;
  isSubmitting = false;

  emailIsValid(email: string): boolean {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== null;
  }

  handleSubmit(form: Form): void {
    this.error = '';
    this.submitted = false;

    if (!form.name.trim()) {
      this.error = 'Please enter your name.';
      return;
    }

    if (!this.emailIsValid(form.email)) {
      this.error = 'Please enter a valid email address.';
      return;
    }

    if (!form.message.trim()) {
      this.error = 'Please enter a message.';
      return;
    }

    this.isSubmitting = true;

    emailjs.send(
      'service_xb45myv', // Service Id
      'template_e1im7g9', // Template Id
      {
        name: form.name,
        message: form.message,
        email: form.email
      },
      'QwgGN2IBAcJqfKfXX' // Public Key
    )
      .then(() => {
        this.submitted = true;
        this.form = { name: '', email: '', message: '' };

      })
      .catch(() => {
        this.error = 'Failed to send message.';
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}