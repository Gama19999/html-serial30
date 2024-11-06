import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MenuService } from '../services/menu.service';
import { ShortcutsComponent } from '../shortcuts/shortcuts.component';
import { ProjectItem } from '../models/project-item.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @ViewChild('pMenu') private pMenu!: ElementRef;
  private menuOpenSubs!: Subscription;
  menu: any;
  projects: ProjectItem[] = [
    {title: 'diagnocom', description: 'sistema experto diagnosticador de enfermedades comunes en adultos. genera un resultado médico genérico en pocos minutos.', version: 'v2.5.0', image: 'https://diagnocom.serial30.ovh/media/diagnocom.webp', link: 'https://diagnocom.serial30.ovh'},
    {title: 'diagnocom', description: 'sistema experto diagnosticador de enfermedades comunes en adultos. genera un resultado médico genérico en pocos minutos.', version: 'v2.5.0', image: 'https://diagnocom.serial30.ovh/media/diagnocom.webp', link: 'https://diagnocom.serial30.ovh'},
    {title: 'diagnocom', description: 'sistema experto diagnosticador de enfermedades comunes en adultos. genera un resultado médico genérico en pocos minutos.', version: 'v2.5.0', image: 'https://diagnocom.serial30.ovh/media/diagnocom.webp', link: 'https://diagnocom.serial30.ovh'},
    {title: 'diagnocom', description: 'sistema experto diagnosticador de enfermedades comunes en adultos. genera un resultado médico genérico en pocos minutos.', version: 'v2.5.0', image: 'https://diagnocom.serial30.ovh/media/diagnocom.webp', link: 'https://diagnocom.serial30.ovh'},
    {title: 'diagnocom', description: 'sistema experto diagnosticador de enfermedades comunes en adultos. genera un resultado médico genérico en pocos minutos.', version: 'v2.5.0', image: 'https://diagnocom.serial30.ovh/media/diagnocom.webp', link: 'https://diagnocom.serial30.ovh'}
  ];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuOpenSubs = this.menuService.opened.subscribe(value => this.menu = value ? ShortcutsComponent : undefined);
  }

  toggleMenu() {
    const menuBtn = <HTMLDivElement> this.pMenu.nativeElement;
    this.menuService.toggleMenu(menuBtn);
  }

  ngOnDestroy(): void {
    if (this.menuOpenSubs) this.menuOpenSubs.unsubscribe();
  }
}
