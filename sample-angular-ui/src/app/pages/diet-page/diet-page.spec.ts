import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPage } from './diet-page';

describe('DietPage', () => {
  let component: DietPage;
  let fixture: ComponentFixture<DietPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
