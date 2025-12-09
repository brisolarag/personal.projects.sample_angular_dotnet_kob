import { Routes } from '@angular/router';
import { WorkoutPage } from './pages/workout-page/workout-page';
import { DietPage } from './pages/diet-page/diet-page';

export const routes: Routes = [
  { path: '', redirectTo: 'workout', pathMatch: 'full' },
  { path: 'workout', component: WorkoutPage },
  { path: 'diet', component: DietPage }
];
