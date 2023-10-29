import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  downlo() {
    const fileName = 'NAVIN.pdf';
    const filePath = `assets/${fileName}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  }
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  submissionStatus: string = '';

  submitForm() {
    if (
      this.contactForm.name === '' &&
      this.contactForm.email === '' &&
      this.contactForm.message === ''
    ) {
      this.submissionStatus = 'Please Enter the Fields!!';
      setTimeout(() => {
        this.submissionStatus = '';
      }, 5000);
    } else {
      this.submissionStatus = 'Submitted successfully!';
      setTimeout(() => {
        this.submissionStatus = '';
      }, 5000);
      this.contactForm = {
        name: '',
        email: '',
        message: '',
      };
    }
  }
  isFormValid() {
    return (
      this.contactForm.name !== '' &&
      this.contactForm.email !== '' &&
      this.contactForm.message !== ''
    );
  }
}
