import { TestBed } from "@angular/core/testing";
import {AuthService} from "./auth.service";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should return true observable', (done) => {
    service.login().subscribe(res => {
      expect(res).toBeTruthy()
      done()
      }
    )
  });

  it('login should set isLoggedIn true', (done) => {
    service.login().subscribe(() => {
      expect(service.isLoggedIn).toBeTrue()
      done()
    })
  });

  it('logout should set isLoggedIn false', () => {
    service.logout()
    expect(service.isLoggedIn).toBeFalse()
  });
});
