import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HeroService} from "./services/hero/hero.service";
import {HeroesResolver} from "./components/heroes/heroes.resolver";

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent, resolve: { hero: HeroService } },
  { path: 'heroes', component: HeroesComponent, resolve: { heroes: HeroesResolver } },
  { path: 'dashboard', component: DashboardComponent, resolve: { heroes: HeroesResolver } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
