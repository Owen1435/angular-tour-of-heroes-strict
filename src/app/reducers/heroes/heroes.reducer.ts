import { Hero } from 'src/app/model/hero';
import {HeroesActions, heroesActionsType} from './heroes.actions';

export const heroesNode = 'heroes';

export interface HeroesState {
  heroes: Hero[];
}

const initialState: HeroesState = {
  heroes: [],
};

export const heroesReducer = (state = initialState, action: HeroesActions) => {
  switch (action.type) {
    case heroesActionsType.SET_HEROES:
      return {
        ...state,
        heroes: action.payload.heroes
      };
    // case heroesActionsType.ADD_HERO:
    //   return {
    //     ...state,
    //     heroes: [...state.heroes, action.payload.hero]
    //   };
    default:
      return state;
  }
}
