import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {
  AddHeroRequestAction,
  DeleteHeroRequestAction,
  GetHeroesRequestAction,
  heroesActionsType,
  SetHeroesAction
} from "./heroes.actions";
import {HeroService} from "../services/hero.service";

@Injectable()
export class HeroesEffects {
  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) {}

  getHeroes$ = createEffect(() => this.actions$.pipe(
    ofType<GetHeroesRequestAction>(heroesActionsType.GET_HEROES_REQUEST),
    switchMap(() => this.heroService.getHeroes().pipe(
      map((value) => {
        return new SetHeroesAction({
          heroes: value
        })
      })
    ))
  ))

  addHero$ = createEffect(() => this.actions$.pipe(
    ofType<AddHeroRequestAction>(heroesActionsType.ADD_HERO_REQUEST),
    map(action => action.payload),
    switchMap((payload) => this.heroService.addHero(payload.hero).pipe(
      map((hero) => {
        return new GetHeroesRequestAction()
        // return new AddHeroAction({
        //   hero: hero
        // })
      })
    ))
  ))

  deleteHero$ = createEffect(() => this.actions$.pipe(
    ofType<DeleteHeroRequestAction>(heroesActionsType.DELETE_HERO_REQUEST),
    map(action => action.payload),
    switchMap((payload) => this.heroService.deleteHero(payload.id).pipe(
      map((hero) => {
        return new GetHeroesRequestAction()
      })
    ))
  ))
}
