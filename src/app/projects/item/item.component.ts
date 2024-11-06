import { Component, Input } from '@angular/core';

import { ProjectItem } from '../../models/project-item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input('data') data!: ProjectItem;

  gotoProject = (url: string)=> window.open(url, '_blank');
}
