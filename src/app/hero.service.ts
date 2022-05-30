import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HEROES } from './mock-heroes';
import { Hero } from './model/hero';
import {MessageService} from "./message.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroService implements Resolve<any> {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Hero> {
    return this.getHero(Number(route.paramMap.get('id')));
  }
}
