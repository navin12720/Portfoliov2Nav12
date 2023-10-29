import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfoliov2';
  mobileMenuActive = false;
  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.isMenuClick(event)) {
      this.mobileMenuActive = false;
    }
  }

  private isMenuClick(event: Event): boolean {
    const element = event.target as HTMLElement;
    return element && element.closest('.navbar') !== null;
  }
}
