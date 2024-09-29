import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';
import { startWith, tap } from 'rxjs/operators';
import { Weather } from '../../Core/Interfaces/weather';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeatherUVComponent } from "../weather-uv/weather-uv.component";
import { WeatherWindstatusComponent } from "../weather-windstatus/weather-windstatus.component";
import { WeatherHumidityComponent } from "../weather-humidity/weather-humidity.component";
import { WeatherVisibilityComponent } from "../weather-visibility/weather-visibility.component";
import { WeatherAirqualityComponent } from "../weather-airquality/weather-airquality.component";
import { WeatherSunstatusComponent } from "../weather-sunstatus/weather-sunstatus.component";


@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [DatePipe, RouterLink, RouterOutlet, FormsModule, RouterLinkActive, WeatherUVComponent, WeatherWindstatusComponent, WeatherHumidityComponent, WeatherVisibilityComponent, WeatherAirqualityComponent, WeatherSunstatusComponent],
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  private readonly _WeatherService = inject(WeatherService);
  userCurrentCity: WritableSignal<string> = signal("");
  currentWeatherData!: Weather;
  searchValue: string = "";

  getUserCity() {
    return this._WeatherService.getUserCity().pipe(
      tap(res => {
        this.userCurrentCity.set(res.city);
        this.getForecast(this.userCurrentCity());
      })
    ).subscribe();
  }

  getForecast(city: string) {
    this._WeatherService.weatherdata.set(this.searchValue);
      this._WeatherService.getForecast(city, 7).subscribe({
        next: (res) => {
          this.currentWeatherData = res;
          this._WeatherService.weatherdata.set(res);
          console.log(res);
          
        },
      });
  }
  
  getCountry(city:string){
    return this._WeatherService.getCountryImg(city).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  ngOnInit(): void {
    this.getUserCity();
  }
}
