import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import {HeroesComponent} from "../../components/heroes/heroes.component";
import {HeroDetailComponent} from "../../components/hero-detail/hero-detail.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {HeroSearchComponent} from "../../components/hero-search/hero-search.component";
import {FormsModule} from "@angular/forms";
import {HeroFormComponent} from "../../hero-form/hero-form.component";

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
})
export class HeroesModule { }
