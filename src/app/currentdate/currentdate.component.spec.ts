import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentdateComponent } from './currentdate.component';

describe('CurrentdateComponent', () => {
  let component: CurrentdateComponent;
  let fixture: ComponentFixture<CurrentdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
