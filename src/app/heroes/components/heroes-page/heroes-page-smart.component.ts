import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../../model/hero';
import {ActivatedRoute} from "@angular/router";
import {select, Store } from '@ngrx/store';
import {HeroesState} from "../../state-management/heroes.reducer";
import {selectHeroes} from "../../state-management/heroes.selectors";
import {
  AddHeroRequestAction,
  DeleteHeroRequestAction,
  GetHeroesRequestAction
} from "../../state-management/heroes.actions";
import {Observable} from "rxjs";

@Component({
  template: `
      <app-heroes-presentation
      [heroes]="(heroes$ | async)!"
      [selectedId]="selectedId"
      (addHero)="addHero($event)"
      (deleteHero)="deleteHero($event)"
    >
    </app-heroes-presentation>
  `,
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageSmartComponent implements OnInit {
  public heroes$: Observable<Hero[]>;
  public selectedId: number = 0;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private store: Store<HeroesState>,
  ) {
    this.heroes$ = this.store.pipe(select(selectHeroes))
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.selectedId = Number(params.get('id'));
      })

    this.store.dispatch(new GetHeroesRequestAction())
  }

  addHero(heroName: string): void {
    const newHero = { name: heroName } as Hero
    this.store.dispatch(new AddHeroRequestAction({hero: newHero}))
  }

  deleteHero(heroId: number): void {
    this.store.dispatch(new DeleteHeroRequestAction({id: heroId}))
  }
}
