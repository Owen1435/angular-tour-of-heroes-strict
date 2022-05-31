import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { HeroService } from "../services/hero.service";
import { Hero } from "../model/hero";

@Injectable({ providedIn: 'root' })
export class HeroesResolver implements Resolve<Hero[]> {
  constructor(private service: HeroService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Hero[]> {
    return this.service.getHeroes();
  }
}
