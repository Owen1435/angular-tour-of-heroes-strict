import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroDetailComponent} from "../../components/hero-detail/hero-detail.component";
import {HeroService} from "../../services/hero/hero.service";
import {HeroesComponent} from "../../components/heroes/heroes.component";
import {HeroesResolver} from "../../components/heroes/heroes.resolver";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent, resolve: { hero: HeroService } },
  { path: 'heroes', component: HeroesComponent, resolve: { heroes: HeroesResolver } },
  { path: 'dashboard', component: DashboardComponent, resolve: { heroes: HeroesResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
