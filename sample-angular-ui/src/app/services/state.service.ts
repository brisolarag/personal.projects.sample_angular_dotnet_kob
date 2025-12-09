import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private startDay = (new Date().getDay() + 6) % 7; 

  public mode = signal<'workout' | 'diet'>('workout');
  
  selectedDayIndex = signal<number>(this.startDay);

  setDay(index: number) {
    this.selectedDayIndex.set(index);
  }

  setMode(mode: 'workout' | 'diet') {
    this.mode.set(mode);
  }
}
