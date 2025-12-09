import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { StateService } from '../../services/state.service';
import { WorkoutMockService } from '../../services/mock/workout.mock.service';
import { CommonModule } from '@angular/common';
import { WorkoutGateway } from '../../gateways/workout.gateway';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'workout-page',
  imports: [CommonModule],
  templateUrl: './workout-page.html',
  styleUrl: './workout-page.css',
})
export class WorkoutPage {
  private workoutGateway = inject(WorkoutGateway);
  public stateService = inject(StateService);
  public langService = inject(LanguageService);

  private dayIndex$ = toObservable(this.stateService.selectedDayIndex);

  private workouts$ = this.dayIndex$.pipe(
    switchMap(dayIndex => this.workoutGateway.getWorkoutsForDay(dayIndex))
  );

  workouts = toSignal(this.workouts$, { initialValue: [] });
}
