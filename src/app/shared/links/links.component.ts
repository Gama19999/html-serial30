import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { strings_es } from '../../../assets/strings/strings_es';

@Component({
  selector: 'app-links',
  standalone: false,
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  protected readonly s = strings_es;
  linkHovered: string = '';
  isMobile: boolean = innerWidth < 1025;

  constructor(private router: Router) {}

  toggleLinkHover = (link: string = '') => this.linkHovered = link;

  goto = (link: string) => this.router.navigate(['/', link.split('-')[1]]);
}
