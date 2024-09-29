import { Component, computed, inject, Signal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';

@Component({
  selector: 'app-weather-sunstatus',
  standalone: true,
  imports: [],
  templateUrl: './weather-sunstatus.component.html',
  styleUrl: './weather-sunstatus.component.scss'
})
export class WeatherSunstatusComponent {
  readonly _WeatherService = inject(WeatherService);
  weatherdata: Signal<any> = computed(() => {
    return this._WeatherService.weatherdata();
  });
}
