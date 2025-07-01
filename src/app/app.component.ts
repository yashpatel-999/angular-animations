import { Component } from '@angular/core';
import { AnimateComponent } from './animate/animate.component';



@Component({
  selector: 'app-root',
  imports: [AnimateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'animattions';
}

