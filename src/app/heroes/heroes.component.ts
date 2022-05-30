import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.getHeroes();
    this.route.data.subscribe((response: any) => {
      this.heroes = response.heroes;
    })
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }
}
