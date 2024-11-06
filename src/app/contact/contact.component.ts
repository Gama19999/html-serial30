import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MenuService } from '../services/menu.service';
import { ShortcutsComponent } from '../shortcuts/shortcuts.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('cMenu') private cMenu!: ElementRef;
  private menuOpenSubs!: Subscription;
  menu: any;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuOpenSubs = this.menuService.opened.subscribe(value => this.menu = value ? ShortcutsComponent : undefined);
  }

  toggleMenu() {
    const menuBtn = <HTMLDivElement> this.cMenu.nativeElement;
    this.menuService.toggleMenu(menuBtn);
  }

  ngOnDestroy(): void {
    if (this.menuOpenSubs) this.menuOpenSubs.unsubscribe();
  }
}

