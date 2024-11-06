import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WelcomeMenuService {
  isOpen: boolean = false;

  constructor() {}

  toggleMenu(menuElem: HTMLDivElement) {
    this.isOpen = menuElem.classList.contains('pi-times');
    menuElem.classList.remove(this.isOpen ? 'pi-times' : 'pi-bars');
    menuElem.classList.add(this.isOpen ? 'pi-bars' : 'pi-times');
    this.toggleParentBg(menuElem);
  }

  private toggleParentBg(menuElem: HTMLDivElement) {
    if (this.isOpen) {
      menuElem.parentElement!.classList.remove('bg-modal');
      menuElem.parentElement!.children.namedItem('wColorCard')!.classList.remove('bg-modal');
    } else {
      menuElem.parentElement!.classList.add('bg-modal');
      menuElem.parentElement!.children.namedItem('wColorCard')!.classList.add('bg-modal');
    }
  }

}
