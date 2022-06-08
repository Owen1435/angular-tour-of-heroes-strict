import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import {HeroDetailComponent} from "../../components/hero-detail/hero-detail.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {HeroSearchComponent} from "../../components/hero-search/hero-search.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeroFormComponent} from "../../components/hero-form/hero-form.component";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { StoreModule } from '@ngrx/store';
import {heroesNode, heroesReducer} from "../../reducers/heroes/heroes.reducer";
import { EffectsModule } from '@ngrx/effects';
import {HeroesEffects} from "../../reducers/heroes/heroes.effects";
import {HeroesPresentationComponent} from "../../components/heroes/heroes-presentation.component";
import {HeroesSmartComponent} from "../../components/heroes/heroes-smart.component";

@NgModule({
  declarations: [
    HeroesPresentationComponent,
    HeroesSmartComponent,
    HeroDetailComponent,
    DashboardComponent,
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
})
export class HeroesModule { }
