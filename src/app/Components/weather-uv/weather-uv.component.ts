import { Component, computed, inject, Signal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';


@Component({
  selector: 'app-weather-uv',
  standalone: true,
  imports: [],
  templateUrl: './weather-uv.component.html',
  styleUrl: './weather-uv.component.scss'
})
export class WeatherUVComponent {
  readonly _WeatherService = inject(WeatherService);
  weatherdata: Signal<any> = computed(() => {
    return this._WeatherService.weatherdata();
  });
}
