import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTutoringComponent } from './online-tutoring.component';

describe('OnlineTutoringComponent', () => {
  let component: OnlineTutoringComponent;
  let fixture: ComponentFixture<OnlineTutoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineTutoringComponent]
    });
    fixture = TestBed.createComponent(OnlineTutoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
