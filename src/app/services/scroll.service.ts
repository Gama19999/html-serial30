import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollDown: Subject<boolean> = new Subject();
  constructor() {}
}
