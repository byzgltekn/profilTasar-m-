import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { UserService } from '../../services/user.service';
import { Route2 } from './route-2';

describe('Route2', () => {
  let component: Route2;
  let fixture: ComponentFixture<Route2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route2],
      providers: [
        provideRouter([]),
        {
          provide: UserService,
          useValue: {
            getUsers: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Route2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
