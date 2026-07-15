import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route1 } from './route-1';

describe('Route1', () => {
  let component: Route1;
  let fixture: ComponentFixture<Route1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route1],
    }).compileComponents();

    fixture = TestBed.createComponent(Route1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
