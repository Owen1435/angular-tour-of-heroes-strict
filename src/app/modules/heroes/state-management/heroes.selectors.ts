import { createFeatureSelector, createSelector } from '@ngrx/store';
import { heroesNode, HeroesState } from './heroes.reducer';

export const selectHeroesFeature = createFeatureSelector<HeroesState>(heroesNode);

export const selectHeroes = createSelector(
  selectHeroesFeature,
  (state) => state.heroes
);
