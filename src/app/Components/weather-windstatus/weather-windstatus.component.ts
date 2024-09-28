import { Component, computed, inject, Signal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';

@Component({
  selector: 'app-weather-windstatus',
  standalone: true,
  imports: [],
  templateUrl: './weather-windstatus.component.html',
  styleUrl: './weather-windstatus.component.scss'
})
export class WeatherWindstatusComponent {
  readonly _WeatherService = inject(WeatherService);
  weatherdata : Signal<any> = computed(()=>{
    return this._WeatherService.weatherdata();
  });
}
