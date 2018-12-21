import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeMylistingsComponent } from './bike-mylistings.component';

describe('BikeMylistingsComponent', () => {
  let component: BikeMylistingsComponent;
  let fixture: ComponentFixture<BikeMylistingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeMylistingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeMylistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
