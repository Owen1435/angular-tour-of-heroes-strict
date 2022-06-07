import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroDetailComponent} from "../../components/hero-detail/hero-detail.component";
import {HeroService} from "../../services/hero/hero.service";
import {HeroesComponent} from "../../components/heroes/heroes.component";
import {HeroesResolver} from "../../components/heroes/heroes.resolver";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent, resolve: { hero: HeroService }, data: { animation: 'hero' }  },
  { path: 'heroes', component: HeroesComponent, data: { animation: 'heroes' }  },
  { path: 'dashboard', component: DashboardComponent, resolve: { heroes: HeroesResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
