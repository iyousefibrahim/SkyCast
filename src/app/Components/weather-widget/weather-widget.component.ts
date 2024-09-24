import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { WeatherService } from '../../Core/Services/weather.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss'
})
export class WeatherWidgetComponent implements OnInit {
  private readonly _WeatherService = inject(WeatherService);
  userCurrentCity: WritableSignal<string> = signal("");

  getUserCity() {
    return this._WeatherService.getUserCity().pipe(
      tap(res => {
        this.userCurrentCity.set(res.city);
        console.log(this.userCurrentCity());
        this.getCurrent();
      })
    ).subscribe();
  }

  getCurrent() {
    this._WeatherService.getCurrent(this.userCurrentCity()).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }

  ngOnInit(): void {
    this.getUserCity();
  }
}
