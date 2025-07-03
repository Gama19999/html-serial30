import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { strings_es } from '../../../assets/strings/strings_es';
import { environment } from '../../../environments/environment';
import { ScrollService } from '../../services/scroll.service';
import { LinksComponent } from '../../shared/links/links.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: false,
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
  private scrollSubs: Subscription | undefined;
  protected readonly s = strings_es;
  protected readonly pp = strings_es.privacy_policy;
  protected readonly links = LinksComponent;
  showToTop: boolean = false;
  whatsapp: string = environment.whatsapp;
  mailto: string = environment.email;

  constructor(private scrollSrv: ScrollService) {}

  ngOnInit() {
    this.scrollSubs = this.scrollSrv.scrollDown.subscribe(s => this.showToTop = s);
  }

  ngOnDestroy() {
    this.scrollSubs?.unsubscribe();
  }

}
