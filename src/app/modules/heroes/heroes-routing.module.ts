import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {DashboardResolver} from "./resolvers/dashboard.resolver";
import {HeroesPageSmartComponent} from "./components/heroes-page/heroes-page-smart.component";
import {HeroDetailResolver} from "./resolvers/hero-detail.resolver";
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesPageSmartComponent,
    data: { animation: 'heroes' }
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
    resolve: { hero: HeroDetailResolver },
    data: { animation: 'hero' }
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    resolve: { heroes: DashboardResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
