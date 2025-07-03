import { Component } from '@angular/core';

@Component({
  selector: 'app-to-top',
  standalone: false,
  templateUrl: './to-top.component.html',
  styleUrl: './to-top.component.css'
})
export class ToTopComponent {
  private interval: any;

  scrollToTop() {
    this.interval = setInterval(() => this.animation(), 10);
  }

  private animation() {
    window.scrollTo(0, window.scrollY - 90);
    if (window.scrollY <= 0) clearInterval(this.interval);
  }
}
