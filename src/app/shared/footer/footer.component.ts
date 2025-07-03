import { Component } from '@angular/core';

import { strings_es } from '../../../assets/strings/strings_es';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  protected readonly s = strings_es;
  date: Date = new Date();
  appName: string = environment.appName;
}
