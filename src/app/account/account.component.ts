import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { strings_es } from '../../assets/strings/strings_es';
import { ScrollService } from '../services/scroll.service';
import { LinksComponent } from '../shared/links/links.component';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit, OnDestroy {
  private scrollSubs: Subscription | undefined;
  protected readonly s = strings_es;
  protected readonly links = LinksComponent;
  showToTop: boolean = false;

  constructor(private scrollSrv: ScrollService) {}

  ngOnInit() {
    this.scrollSubs = this.scrollSrv.scrollDown.subscribe(s => this.showToTop = s);
  }

  ngOnDestroy() {
    this.scrollSubs?.unsubscribe();
  }
}
