import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCoachingComponent } from './list-of-coaching.component';

describe('ListOfCoachingComponent', () => {
  let component: ListOfCoachingComponent;
  let fixture: ComponentFixture<ListOfCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
