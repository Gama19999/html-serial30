import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { strings_es } from '../../assets/strings/strings_es';
import { environment } from '../../environments/environment';
import { LinksComponent } from '../shared/links/links.component';


@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements AfterViewInit {
  protected readonly s = strings_es;
  @ViewChild('appNameEl') protected appNameEl!: ElementRef;
  @ViewChild('shadowEl') protected shadowEl!: ElementRef;
  appName: string = environment.appName;
  links: any = LinksComponent;

  constructor() {}

  ngAfterViewInit() {
    const anEl = <HTMLSpanElement> this.appNameEl.nativeElement;
    const shEl = <HTMLSpanElement> this.shadowEl.nativeElement;
    anEl.addEventListener('mousemove', (event: MouseEvent)=> {
      let coorX = ((anEl.clientWidth / 2) - (event.pageX - anEl.offsetLeft));
      let coorY = ((anEl.clientHeight / 2) - (event.pageY - anEl.offsetTop));
      let degX  = ((coorY / (anEl.clientHeight / 2)) * 20);
      let degY  = ((coorX / (anEl.clientWidth / 2)) * -20);
      if (window.innerWidth > 1024) {
        anEl.style.padding = '8rem 6rem';
        anEl.style.transform = `perspective(1600px) rotateY(${degY+5}deg) rotateX(${degX}deg)`;
        shEl.style.transform = `perspective(1600px) scale(1) rotateY(${degY}deg) rotateX(${degX}deg)`;
      }
    });
    anEl.addEventListener('mouseout', () => {
      anEl.style.padding = '0';
      anEl.style.transform = 'perspective(1600px)';
      shEl.style.transform = 'perspective(1600px)';
    });
  }
}
