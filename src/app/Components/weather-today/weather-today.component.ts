import { Component } from '@angular/core';
import { WeatherTimeComponent } from "../weather-time/weather-time.component";


@Component({
  selector: 'app-weather-today',
  standalone: true,
  imports: [WeatherTimeComponent],
  templateUrl: './weather-today.component.html',
  styleUrl: './weather-today.component.scss'
})
export class WeatherTodayComponent {

}
