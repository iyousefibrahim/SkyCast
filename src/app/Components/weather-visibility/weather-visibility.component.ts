import { Component, computed, inject, Signal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';
import { Weather } from '../../Core/Interfaces/weather';

@Component({
  selector: 'app-weather-visibility',
  standalone: true,
  imports: [],
  templateUrl: './weather-visibility.component.html',
  styleUrl: './weather-visibility.component.scss'
})
export class WeatherVisibilityComponent {
  readonly _WeatherService = inject(WeatherService);
  weatherdata : Signal<any> = computed(()=>{
    return this._WeatherService.weatherdata();
  });
}
