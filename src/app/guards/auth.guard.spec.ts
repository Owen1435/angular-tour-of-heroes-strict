import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {AuthService} from "../auth/services/auth.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const mockAuthService = {
    isLoggedIn: true,
    redirectUrl: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: AuthService, useValue: mockAuthService}]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
