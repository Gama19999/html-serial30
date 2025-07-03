import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { strings_es } from '../../../assets/strings/strings_es';
import { environment } from '../../../environments/environment';
import { ProjectInfo } from '../../models/project-info.model';
import { getImagePath } from '../util/util.functions';

@Component({
  selector: 'app-flip-img',
  standalone: false,
  templateUrl: './flip-img.component.html',
  styleUrl: './flip-img.component.css'
})
export class FlipImgComponent {
  protected readonly s = strings_es;
  @Input('view') view!: string;
  @Input('project-info') projectInfo!: ProjectInfo;
  appName: string = environment.appName;

  constructor(private router: Router) {}

  getImg = ()=> getImagePath(this.view, this.projectInfo.image);

  openDetails(evt: MouseEvent) {
    if ((<HTMLElement> evt.target).tagName === 'A') return;
    this.router.navigate(['/', 'projects', this.projectInfo.name])
      .then(() => console.log('navigated to', this.projectInfo.name));
  }
}
