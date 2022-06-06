import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import {HeroesComponent} from "../../components/heroes/heroes.component";
import {HeroDetailComponent} from "../../components/hero-detail/hero-detail.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {HeroSearchComponent} from "../../components/hero-search/hero-search.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeroFormComponent} from "../../components/hero-form/hero-form.component";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

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
    HeroesRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class HeroesModule { }
