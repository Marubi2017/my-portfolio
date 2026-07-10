import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Analytics } from "@vercel/analytics/next";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('World');
}


