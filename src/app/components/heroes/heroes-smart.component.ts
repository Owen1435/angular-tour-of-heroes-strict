import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../model/hero';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {select, Store } from '@ngrx/store';
import {HeroesState} from "../../reducers/heroes/heroes.reducer";
import {selectHeroes} from "../../reducers/heroes/heroes.selectors";
import {
  AddHeroRequestAction,
  DeleteHeroRequestAction,
  GetHeroesRequestAction
} from "../../reducers/heroes/heroes.actions";

@Component({
  template: `
      <app-heroes-presentation
      [heroes]="heroes"
      [selectedId]="selectedId"
      (addHero)="addHero($event)"
      (deleteHero)="deleteHero($event)"
    >
    </app-heroes-presentation>
  `,
  styleUrls: ['./heroes.component.scss']
})
export class HeroesSmartComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedId: number = 0;
  public form : FormGroup = new FormGroup({});

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private store: Store<HeroesState>,
  ) {
    this.store.pipe(select(selectHeroes)).subscribe(heroes => {
      this.heroes = heroes
    });
    this.form = new FormGroup({
      "heroName": new FormControl('', [Validators.required]),
    });
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
