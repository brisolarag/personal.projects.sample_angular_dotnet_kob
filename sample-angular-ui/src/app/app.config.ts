import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { WorkoutGateway } from './gateways/workout.gateway';
import { WorkoutMockService } from './services/mock/workout.mock.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: WorkoutGateway, useClass: WorkoutMockService }
  ]
};
