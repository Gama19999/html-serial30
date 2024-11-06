import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MenuService } from '../services/menu.service';
import { ShortcutsComponent } from '../shortcuts/shortcuts.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  @ViewChild('aMenu') private aMenu!: ElementRef;
  private menuOpenSubs!: Subscription;
  menu: any;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuOpenSubs = this.menuService.opened.subscribe(value => this.menu = value ? ShortcutsComponent : undefined);
  }

  toggleMenu() {
    const menuBtn = <HTMLDivElement> this.aMenu.nativeElement;
    this.menuService.toggleMenu(menuBtn);
  }

  ngOnDestroy(): void {
    if (this.menuOpenSubs) this.menuOpenSubs.unsubscribe();
  }
}
