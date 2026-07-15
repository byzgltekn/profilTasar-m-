import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2 } from './route-2';

describe('Route2', () => {
  let component: Route2;
  let fixture: ComponentFixture<Route2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route2],
    }).compileComponents();

    fixture = TestBed.createComponent(Route2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
