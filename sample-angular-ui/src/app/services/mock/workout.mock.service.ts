import { Injectable } from "@angular/core";
import { Workout } from "../../models/workout.model";
import { WorkoutGateway } from "../../gateways/workout.gateway";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class WorkoutMockService implements WorkoutGateway {
  
  private getDate(daysAgo: number): Date {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date;
  }

  private mockData: Record<number, Workout[]> = {
    0: [
      {
        id: 1,
        title: 'Chest & Triceps Power',
        description: 'Heavy compound movements focusing on strength.',
        exercises: [
          {
            id: 101,
            muscle: 'Chest',
            description: 'Barbell Bench Press',
            repetitions: 8,
            sets: 4,
            weight: [
              { id: 1, date: this.getDate(7), weight: 80, reps: 8, observations: 'Felt heavy' },
              { id: 2, date: this.getDate(0), weight: 82.5, reps: 7 }
            ]
          },
          {
            id: 102,
            muscle: 'Triceps',
            description: 'Weighted Dips',
            repetitions: 10,
            sets: 3,
            weight: [
              { id: 3, date: this.getDate(7), weight: 10, reps: 10 } // 10kg added weight
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Evening Cardio',
        description: 'Light jog to recover.',
        exercises: [] // Cardio might not have weight records
      }
    ],

    // 1: Tuesday - Back & Biceps
    1: [
      {
        id: 3,
        title: 'Back Builder',
        description: 'Thickness and width focus.',
        exercises: [
          {
            id: 201,
            muscle: 'Back',
            description: 'Deadlift',
            repetitions: 5,
            sets: 3,
            weight: [
              { id: 4, date: this.getDate(7), weight: 120, reps: 5 }
            ]
          },
          {
            id: 202,
            muscle: 'Biceps',
            description: 'Barbell Curl',
            repetitions: 12,
            sets: 3,
            weight: [
              { id: 5, date: this.getDate(7), weight: 30, reps: 12 }
            ]
          }
        ]
      }
    ],

    // 2: Wednesday - Rest
    2: [],

    // 3: Thursday - Legs
    3: [
      {
        id: 4,
        title: 'Leg Day',
        description: 'Quads and Hamstrings.',
        exercises: [
          {
            id: 301,
            muscle: 'Legs',
            description: 'Barbell Squat',
            repetitions: 6,
            sets: 4,
            weight: [
              { id: 6, date: this.getDate(7), weight: 100, reps: 6 }
            ]
          }
        ]
      }
    ],

    // 4: Friday - Shoulders
    4: [
      {
        id: 5,
        title: 'Boulder Shoulders',
        description: 'Overhead strength.',
        exercises: [
          {
            id: 401,
            muscle: 'Shoulders',
            description: 'Overhead Press',
            repetitions: 8,
            sets: 4,
            weight: [
              { id: 7, date: this.getDate(7), weight: 50, reps: 8 }
            ]
          }
        ]
      }
    ],

    // 5: Saturday - Full Body / Fun
    5: [
      {
        id: 6,
        title: 'CrossFit WOD',
        description: 'Metcon style workout.',
        exercises: [
          {
            id: 501,
            muscle: 'Full Body',
            description: 'Thrusters',
            repetitions: 15,
            sets: 5,
            weight: []
          }
        ]
      }
    ],

    // 6: Sunday - Rest
    6: [] 
  };

  getWorkoutsForDay(dayIndex: number): Observable<Workout[]> {
    return of(this.mockData[dayIndex] || []);
  }
}