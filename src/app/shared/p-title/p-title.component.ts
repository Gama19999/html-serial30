import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-p-title',
  standalone: false,
  templateUrl: './p-title.component.html',
  styleUrl: './p-title.component.css'
})
export class PTitleComponent {
    @Input('title') title!: string;
}
