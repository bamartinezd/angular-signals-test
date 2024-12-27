import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'AngularTestSignals';
}
