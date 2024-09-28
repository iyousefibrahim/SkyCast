import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';
import { Weather } from '../../Core/Interfaces/weather';

@Component({
  selector: 'app-weather-humidity',
  standalone: true,
  imports: [],
  templateUrl: './weather-humidity.component.html',
  styleUrl: './weather-humidity.component.scss'
})
export class WeatherHumidityComponent {
  readonly _WeatherService = inject(WeatherService);
  weatherdata : Signal<any> = computed(()=>{
    return this._WeatherService.weatherdata();
  });
}
