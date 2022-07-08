import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyexpenseComponent } from './monthlyexpense.component';

describe('MonthlyexpenseComponent', () => {
  let component: MonthlyexpenseComponent;
  let fixture: ComponentFixture<MonthlyexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyexpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
