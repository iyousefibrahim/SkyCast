import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly _HttpClient: HttpClient) { }
  weatherdata: WritableSignal<any> = signal({});

  getCurrent(city: string): Observable<any> {
    return this._HttpClient.get(`http://api.weatherapi.com/v1/current.json?key=70922293e0264ef0ac2211409241506&q=${city}&aqi=yes`);
  }

  getForecast(city: string, days: number): Observable<any> {
    return this._HttpClient.get(`http://api.weatherapi.com/v1/forecast.json?key=70922293e0264ef0ac2211409241506&q=${city}&days=${days}&aqi=yes&alerts=no`);
  }

  getUserCity(): Observable<any> {
    return this._HttpClient.get(`https://ipinfo.io?token=aa5864c1c3c2a3`);
  }

}
