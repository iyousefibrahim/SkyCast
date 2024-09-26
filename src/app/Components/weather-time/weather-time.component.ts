import { Component, inject, Input } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';
import { DatePipe } from '@angular/common';
import { HoursPipe } from '../../Core/Pipes/hours.pipe';

@Component({
  selector: 'app-weather-time',
  standalone: true,
  imports: [DatePipe,HoursPipe],
  templateUrl: './weather-time.component.html',
  styleUrl: './weather-time.component.scss'
})
export class WeatherTimeComponent {
  readonly _WeatherService = inject(WeatherService);
  @Input() date!:string;

  
}
