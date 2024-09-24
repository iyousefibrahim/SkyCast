import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';
import { tap } from 'rxjs/operators';
import { Weather } from '../../Core/Interfaces/weather';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss'
})
export class WeatherWidgetComponent implements OnInit {
  private readonly _WeatherService = inject(WeatherService);
  userCurrentCity: WritableSignal<string> = signal("");
  currentWeatherData!: Weather;

  getUserCity() {
    return this._WeatherService.getUserCity().pipe(
      tap(res => {
        this.userCurrentCity.set(res.city);
        this.getForecast();
      })
    ).subscribe();
  }

  getForecast() {
    this._WeatherService.getForecast(this.userCurrentCity(), 7).subscribe({
      next: (res) => {
        this.currentWeatherData = res;
        console.log(res);
      }
    });
  }

  ngOnInit(): void {
    this.getUserCity();
  }
}
