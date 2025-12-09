import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'diet-page',
  imports: [],
  templateUrl: './diet-page.html',
  styleUrl: './diet-page.css',
})
export class DietPage {
  public langService = inject(LanguageService);
  public stateService = inject(StateService);
}
