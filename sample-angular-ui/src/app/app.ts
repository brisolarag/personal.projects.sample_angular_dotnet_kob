import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language';
import { StateService } from './services/state.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public langService = inject(LanguageService);
  public stateService = inject(StateService);
  private router = inject(Router);

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      if (url.includes('diet')) {
        this.stateService.setMode('diet');
      } else {
        this.stateService.setMode('workout');
      }
    });
  }
  
  isProfileOpen = false;
  dayIndices = [0, 1, 2, 3, 4, 5, 6];

  selectDay(index: number) {
    this.stateService.setDay(index);
  }

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }
}
