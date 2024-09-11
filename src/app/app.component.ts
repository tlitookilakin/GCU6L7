import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutsComponent } from "./components/donuts/donuts.component";
import { HallOfFameComponent } from "./components/hall-of-fame/hall-of-fame.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonutsComponent, HallOfFameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'DonutsAndDevs';
  showDonuts : boolean = true;
}
