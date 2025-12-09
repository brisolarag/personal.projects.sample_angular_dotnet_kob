import { TestBed } from '@angular/core/testing';

import { WorkoutMockService } from './workout.mock.service';

describe('WorkoutMockService', () => {
  let service: WorkoutMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
