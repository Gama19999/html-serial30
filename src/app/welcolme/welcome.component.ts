import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MenuService } from '../services/menu.service';
import { ShortcutsComponent } from '../shortcuts/shortcuts.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('wAppName') private wAppName!: ElementRef;
  @ViewChild('wShadowCard') private wShadowCard!: ElementRef;
  @ViewChild('wMenu') private wMenu!: ElementRef;
  private menuOpenSubs!: Subscription;
  menu: any;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuOpenSubs = this.menuService.opened.subscribe(value => this.menu = value ? ShortcutsComponent : undefined);
  }

  ngAfterViewInit(): void {
    this.wAppName.nativeElement.addEventListener('mousemove', (event: any)=> {
      const elem = <HTMLElement> this.wAppName.nativeElement;
      let coorX = ( (elem.clientWidth / 2) - (event.pageX - elem.offsetLeft) );
      let coorY = ( (elem.clientHeight / 2) - (event.pageY - elem.offsetTop) );
      let degX  = ( ( coorY / (elem.clientHeight / 2) ) * 20 ); // max. degree = 10
      let degY  = ( ( coorX / (elem.clientWidth / 2) ) * -20 ); // max. degree = 10
      if (window.innerWidth > 1024) {
        (<HTMLSpanElement> this.wAppName.nativeElement).style.transform = `perspective(1600px) rotateY(${degY+5}deg) rotateX(${degX}deg)`;
        (<HTMLSpanElement> this.wShadowCard.nativeElement).style.transform = `perspective(1600px) scale(1) rotateY(${degY}deg) rotateX(${degX}deg)`;
      }
    });
    this.wAppName.nativeElement.addEventListener('mouseout', () => {
      (<HTMLSpanElement> this.wAppName.nativeElement).style.transform = 'perspective(1600px)';
      (<HTMLSpanElement> this.wShadowCard.nativeElement).style.transform = 'perspective(1600px)';
    });
  }

  toggleMenu() {
    const menuBtn = <HTMLDivElement> this.wMenu.nativeElement;
    this.menuService.toggleMenu(menuBtn);
  }

  ngOnDestroy(): void {
    if (this.menuOpenSubs) this.menuOpenSubs.unsubscribe();
  }
}
