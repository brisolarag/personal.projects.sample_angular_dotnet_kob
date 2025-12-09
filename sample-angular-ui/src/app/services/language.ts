import { Injectable, signal, computed } from '@angular/core';
import { Translation, EN, PT } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = signal<'en' | 'pt'>('en');

  public t = computed(() => {
    return this.currentLang() === 'en' ? EN : PT;
  });

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'en' ? 'pt' : 'en');
  }

  setLanguage(lang: 'en' | 'pt') {
    this.currentLang.set(lang);
  }
}