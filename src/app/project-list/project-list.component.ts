import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { strings_es } from '../../assets/strings/strings_es';
import { projects } from '../shared/util/util.functions';
import { ScrollService } from '../services/scroll.service';
import { LinksComponent } from '../shared/links/links.component';
import { ProjectInfo } from '../models/project-info.model';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit, OnDestroy {
  private scrollSubs: Subscription | undefined;
  protected readonly s = strings_es;
  protected readonly linksComp: any = LinksComponent;
  showToTop: boolean = false;
  projects: ProjectInfo[] = projects;

  constructor(private scrollSrv: ScrollService) {}

  ngOnInit() {
    this.scrollSubs = this.scrollSrv.scrollDown.subscribe(s => this.showToTop = s);
  }

  ngOnDestroy() {
    this.scrollSubs?.unsubscribe();
  }
}
