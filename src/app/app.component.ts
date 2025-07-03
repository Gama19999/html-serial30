import { Component } from '@angular/core';

import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private scrollSrv: ScrollService) {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY / window.innerHeight;
      this.scrollSrv.scrollDown.next(scroll > 0.1);
      document.body.style.setProperty('--scroll', `${scroll < 1 ? scroll : 0.999999999}`)
    }, false);
  }
}
