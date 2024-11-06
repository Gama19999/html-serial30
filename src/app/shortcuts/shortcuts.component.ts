import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrl: './shortcuts.component.css'
})
export class ShortcutsComponent {
  @Input('menuElem') menuElem: any;

  constructor(private menuService: MenuService, private router: Router) {}

  navigate(target: any) {
    this.menuService.toggleMenu(<HTMLDivElement> this.menuElem);
    const goto = (<HTMLElement> target).getAttribute('data-goto');
    this.router.navigate(['/', goto]);
  }
}
