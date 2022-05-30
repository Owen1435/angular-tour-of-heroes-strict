import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {HeroService} from "./hero.service";
import {HeroesResolver} from "./heroes/heroes.resolver";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent, resolve: { hero: HeroService } },
  { path: 'heroes', component: HeroesComponent, resolve: { heroes: HeroesResolver } },
  { path: 'dashboard', component: DashboardComponent, resolve: { heroes: HeroesResolver } },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
