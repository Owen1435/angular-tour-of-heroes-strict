import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroDetailComponent} from "../../components/hero-detail/hero-detail.component";
import {HeroService} from "../../services/hero/hero.service";
import {HeroesResolver} from "../../components/heroes/heroes.resolver";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {HeroesSmartComponent} from "../../components/heroes/heroes-smart.component";

const routes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent, resolve: { hero: HeroService }, data: { animation: 'hero' }  },
  { path: 'heroes', component: HeroesSmartComponent, data: { animation: 'heroes' }  },
  { path: 'dashboard', component: DashboardComponent, resolve: { heroes: HeroesResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
