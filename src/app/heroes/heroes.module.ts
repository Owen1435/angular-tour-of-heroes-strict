import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HeroesRoutingModule } from './heroes-routing.module';
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {HeroSearchComponent} from "./components/hero-search/hero-search.component";
import {HeroFormComponent} from "./components/hero-form/hero-form.component";
import {HeroesEffects} from "./state-management/heroes.effects";
import {HeroesPagePresentationComponent} from "./components/heroes-page/heroes-page-presentation.component";
import {HeroesPageSmartComponent} from "./components/heroes-page/heroes-page-smart.component";
import {DashboardPageComponent} from "./components/dashboard-page/dashboard-page.component";
import {heroesNode, heroesReducer} from "./state-management/heroes.reducer";

import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HeroService} from "./services/hero.service";

@NgModule({
  declarations: [
    HeroesPagePresentationComponent,
    HeroesPageSmartComponent,
    HeroDetailComponent,
    DashboardPageComponent,
    HeroSearchComponent,
    HeroFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(heroesNode, heroesReducer),
    EffectsModule.forFeature([HeroesEffects]),
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule { }
