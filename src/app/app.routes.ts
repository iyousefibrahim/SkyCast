import { Routes } from '@angular/router';
import { WeatherTodayComponent } from './Components/weather-today/weather-today.component';
import { WeatherWeekComponent } from './Components/weather-week/weather-week.component';

export const routes: Routes = [
    { path: "today", component: WeatherTodayComponent },
    { path: "week", component: WeatherWeekComponent },
    { path: "**", redirectTo: "today" },
];
