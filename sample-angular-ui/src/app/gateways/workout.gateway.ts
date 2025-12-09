import { Observable } from 'rxjs';
import { Workout } from '../models/workout.model';

export abstract class WorkoutGateway {
  abstract getWorkoutsForDay(dayIndex: number): Observable<Workout[]>;
}