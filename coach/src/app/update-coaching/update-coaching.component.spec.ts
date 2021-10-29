import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoachingComponent } from './update-coaching.component';

describe('UpdateCoachingComponent', () => {
  let component: UpdateCoachingComponent;
  let fixture: ComponentFixture<UpdateCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
