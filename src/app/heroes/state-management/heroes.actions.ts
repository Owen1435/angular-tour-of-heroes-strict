import { Action } from '@ngrx/store';
import { Hero } from 'src/app/model/hero';

export enum heroesActionsType {
  SET_HEROES = '[HEROES] SET_HEROES',
  GET_HEROES_REQUEST = '[HEROES] GET_HEROES_REQUEST',
  ADD_HERO_REQUEST = '[HEROES] ADD_HERO_REQUEST',
  DELETE_HERO_REQUEST = '[HEROES] DELETE_HERO_REQUEST',
}

export class GetHeroesRequestAction implements Action {
  readonly type = heroesActionsType.GET_HEROES_REQUEST;
}

export class SetHeroesAction implements Action {
  readonly type = heroesActionsType.SET_HEROES;
  constructor(public payload: {
    heroes: Hero[];
  }) {}
}

export class AddHeroRequestAction implements Action {
  readonly type = heroesActionsType.ADD_HERO_REQUEST;
  constructor(public payload: {
    hero: Hero;
  }) {}
}

export class DeleteHeroRequestAction implements Action {
  readonly type = heroesActionsType.DELETE_HERO_REQUEST;
  constructor(public payload: {
    id: number;
  }) {}
}

export type HeroesActions = SetHeroesAction | GetHeroesRequestAction | AddHeroRequestAction | DeleteHeroRequestAction
