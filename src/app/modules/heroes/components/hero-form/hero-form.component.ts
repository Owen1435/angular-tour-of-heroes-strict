import {Component, Input} from '@angular/core';
import { Hero } from '../../../../model/hero';
import {Router} from "@angular/router";
import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  @Input() hero?: Hero

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  onSubmit(form: any) {
    console.log(form)
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    const heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', { id: heroId }]);
  }
}
