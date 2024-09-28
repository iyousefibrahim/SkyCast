import { Component, computed, inject, Signal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';

@Component({
  selector: 'app-weather-airquality',
  standalone: true,
  imports: [],
  templateUrl: './weather-airquality.component.html',
  styleUrls: ['./weather-airquality.component.scss']
})
export class WeatherAirqualityComponent {
  readonly _WeatherService = inject(WeatherService);
  weatherData: Signal<any> = computed(() => {
    return this._WeatherService.weatherdata();
  });
}
