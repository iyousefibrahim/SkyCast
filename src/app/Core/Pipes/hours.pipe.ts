import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours',
  standalone: true
})
export class HoursPipe implements PipeTransform {

  transform(data: any[]): any[] {
    if (!data) {
      return [];
    }
    const selectedHours = ['12:00', '15:00', '18:00', '23:00'];
    return data.filter(item => {
      const hour = item.time.split(' ')[1]; // "2024-09-26 <-> 12:00" Separate Date
      return selectedHours.includes(hour);
    });
  }

}
