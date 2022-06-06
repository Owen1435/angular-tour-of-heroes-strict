import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../model/hero';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedId: number = 0;
  form : FormGroup = new FormGroup({});

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      "heroName": new FormControl('fsdfsf', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.data
      .subscribe((response: any) => {
        this.heroes = response.heroes;
      })

    this.route.paramMap
      .subscribe(params => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
      })
  }

  add(): void {
    const name = this.form.controls['heroName'].value.trim()
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });

    this.form.reset()
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
