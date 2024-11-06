import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  public opened: Subject<boolean> = new Subject();
  private isOpen: boolean = false;

  constructor() {}

  toggleMenu(menuElem: HTMLDivElement) {
    menuElem.classList.remove(this.isOpen ? 'pi-times' : 'pi-bars');
    menuElem.classList.add(this.isOpen ? 'pi-bars' : 'pi-times');
    this.isOpen = menuElem.classList.contains('pi-times');
    this.toggleParentBg(menuElem);
    this.opened.next(this.isOpen);
  }

  private toggleParentBg(menuElem: HTMLDivElement) {
    const parentCL = menuElem.parentElement!.classList;
    const items = document.getElementsByClassName('item');
    const wColorCard = document.getElementById('wColorCard');
    if (this.isOpen) {
      parentCL.add('bg-modal');
      if (wColorCard) wColorCard.classList.add('bg-modal');
      for (let i = 0; i < items.length; i++) {
        items.item(i)!.classList.add('bg-modal');
        items.item(i)!.children.item(0)!.classList.add('smopacity');
        items.item(i)!.children.item(3)!.classList.add('smopacity');
      }
    } else {
      parentCL.remove('bg-modal');
      if (wColorCard) wColorCard.classList.remove('bg-modal');
      for (let i = 0; i < items.length; i++) {
        items.item(i)!.classList.remove('bg-modal');
        items.item(i)!.children.item(0)!.classList.remove('smopacity');
        items.item(i)!.children.item(3)!.classList.remove('smopacity');
      }
    }
  }

}
