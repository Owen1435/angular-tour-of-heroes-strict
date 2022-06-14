import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormComponent } from './hero-form.component';
import {FormsModule} from "@angular/forms";
import {HeroService} from "../../services/hero.service";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { of } from 'rxjs';

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;

  const inputHero = { id: 1, name: 'Dr. Nice' }
  const mockHeroService = jasmine.createSpyObj(['updateHero'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        HeroFormComponent
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;

    component.hero = inputHero

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should input hero', () => {
    expect(component.hero).toEqual(inputHero);
  });

  it('onSubmit should call updateHero method from HeroService', () => {
    const updatedHero = { id: 1, name: 'Dr. Nice' }
    mockHeroService.updateHero.and.returnValue(of(updatedHero))

    component.onSubmit(null)
    expect(mockHeroService.updateHero).toHaveBeenCalled()
  });

  it('onSubmit should not call updateHero method from HeroService', () => {
    component.hero = undefined
    mockHeroService.updateHero.and.returnValue(of({}))
    component.onSubmit(null)
    expect(mockHeroService.updateHero).not.toHaveBeenCalled()
  });

  it('onSubmit should call goBack', () => {
    const updatedHero = { id: 1, name: 'Dr. Nice' }
    mockHeroService.updateHero.and.returnValue(of(updatedHero))

    const goBackSpy = spyOn(component, 'goBack')
    component.onSubmit(null)
    expect(goBackSpy).toHaveBeenCalled()
  });
});
