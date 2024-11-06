import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s30logo',
  templateUrl: './s30logo.component.html',
  styleUrl: './s30logo.component.css'
})
export class S30logoComponent {
  appName: string = 'serial 30';

  constructor(private router: Router) {}

  goWelcome = () => this.router.navigate(['/', 'welcome']);
  protected readonly innerWidth = innerWidth;
}
