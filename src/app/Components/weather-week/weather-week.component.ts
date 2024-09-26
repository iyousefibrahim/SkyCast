import { Component } from '@angular/core';
import { WeatherTimeComponent } from "../weather-time/weather-time.component";

@Component({
  selector: 'app-weather-week',
  standalone: true,
  imports: [WeatherTimeComponent],
  templateUrl: './weather-week.component.html',
  styleUrl: './weather-week.component.scss'
})
export class WeatherWeekComponent {

}
