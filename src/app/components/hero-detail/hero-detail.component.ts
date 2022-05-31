import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../model/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((response: any) => {
      this.hero = response.hero;
    })
  }

  goBack(): void {
    // this.location.back();
    const heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', { id: heroId }]);
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
