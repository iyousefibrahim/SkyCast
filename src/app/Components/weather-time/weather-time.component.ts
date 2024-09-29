import { Component, computed, inject, Input, Signal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';
import { DatePipe } from '@angular/common';
import { HoursPipe } from '../../Core/Pipes/hours.pipe';
import { Weather } from '../../Core/Interfaces/weather';

@Component({
  selector: 'app-weather-time',
  standalone: true,
  imports: [DatePipe, HoursPipe],
  templateUrl: './weather-time.component.html',
  styleUrl: './weather-time.component.scss'
})
export class WeatherTimeComponent {
  readonly _WeatherService = inject(WeatherService);
  @Input() date!: string;

  weatherData: Signal<any> = computed(() => {
    return this._WeatherService.weatherdata();
  });
  
  ScaleUnit: Signal<any> = computed(() => {
    return this._WeatherService.scaleUnit();
  });
}
