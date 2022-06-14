import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {RouterTestingModule} from "@angular/router/testing";
import { NO_ERRORS_SCHEMA} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import { of } from 'rxjs/internal/observable/of';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockAuthService = jasmine.createSpyObj(['login', 'logout'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ LoginComponent ],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logout() should call logout() from auth service', () => {
    component.logout()
    expect(mockAuthService.logout).toHaveBeenCalled()
  });

  it('logout() should call getMessage()', () => {
    const getMessagesSpy = spyOn(component, 'getMessage')
    component.logout()
    expect(getMessagesSpy).toHaveBeenCalled()
  });

  it('login() should set success message', () => {
    mockAuthService.login.and.returnValue(of({}))
    mockAuthService.isLoggedIn = true

    component.login()
    expect(component.message).toEqual('Logged in')
  });

  it('login() should set error message', () => {
    mockAuthService.login.and.returnValue(of({}))
    mockAuthService.isLoggedIn = false

    component.login()
    expect(component.message).toEqual('Logged out')
  });
});
