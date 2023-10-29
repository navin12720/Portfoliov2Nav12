import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  typewriterText = 'Hello, ';
  dynamicText = '';
  sentences = [
    'This is Navin From Chennai',
    'I am a Front-End Developer',
    'And this is My Portfolio',
  ];
  currentSentenceIndex = 0;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    const sentence = this.sentences[this.currentSentenceIndex];
    this.dynamicText = ''; // Clear the previous dynamic text

    for (let i = 0; i < sentence.length; i++) {
      setTimeout(() => {
        this.dynamicText += sentence[i];
      }, i * 100); // Delay each character by 100 milliseconds
    }

    this.currentSentenceIndex =
      (this.currentSentenceIndex + 1) % this.sentences.length;

    setTimeout(() => {
      this.typeWriter();
    }, sentence.length * 100 + 1000); // Delay after each sentence
  }
  downlo() {
    const fileName = 'NAVIN.pdf';
    const filePath = `assets/${fileName}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
  }
}
