import {ComponentFixture, TestBed} from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import {HeroService} from "../../services/hero.service";
import {Observable} from "rxjs/internal/Observable";
import {Hero} from "../../../model/hero";
import { of } from 'rxjs';

const mockHeroes: Hero[] = [
  { id: 1, name: 'Dr. Nice' },
  { id: 2, name: 'Bombasto' },
  { id: 3, name: 'Celeritas' },
];

const mockHeroService = {
  searchHeroes: (term: string): Observable<Hero[]> => {
    return of(mockHeroes)
  }
}

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let heroService: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ],
      providers: [{ provide: HeroService, useValue: mockHeroService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    heroService = TestBed.inject(HeroService);

    fixture.detectChanges();
  });

  it('component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('search method should return searched hero',(done) => {
    component.heroes$.subscribe(heroes => {
        expect(heroes).toEqual(mockHeroes)
        done()
      }
    )
    component.search('term')
  });
});
