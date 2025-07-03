import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { strings_es } from '../../assets/strings/strings_es';
import { environment } from '../../environments/environment';
import { PublicApiService } from '../services/public-api.service';
import { ScrollService } from '../services/scroll.service';
import { LinksComponent } from '../shared/links/links.component';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  private scrollSubs: Subscription | undefined;
  private apiSubs: Subscription | undefined;
  protected readonly s = strings_es;
  protected readonly links = LinksComponent;
  showToTop: boolean = false;
  appVersion: string = environment.version;
  backVersion: string = '';
  web: string = environment.git_web;
  api: string = environment.git_api;

  constructor(private scrollSrv: ScrollService, private publicApiSrv: PublicApiService) {}

  ngOnInit() {
    this.scrollSubs = this.scrollSrv.scrollDown.subscribe(s => this.showToTop = s);
    this.apiSubs = this.publicApiSrv.getApiVersion().subscribe({
      next: success => this.backVersion = success.data.toString().split(' ')[1],
      error: failure => console.error(failure)
    });
  }

  ngOnDestroy() {
    this.scrollSubs?.unsubscribe();
    this.apiSubs?.unsubscribe();
  }
}
