import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Hero } from '../../model/hero';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes-presentation',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesPresentationComponent {
  @Input()
  heroes: Hero[] | undefined;
  @Input()
  selectedId: number | undefined;

  @Output()
  addHero: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  deleteHero: EventEmitter<number> = new EventEmitter<number>();

  public form : FormGroup = new FormGroup({});

  constructor() {
    this.form = new FormGroup({
      "heroName": new FormControl('', [Validators.required]),
    });
  }

  add(): void {
    const name = this.form.controls['heroName'].value.trim()
    if (!name) {
      return;
    }
    this.addHero.emit(name);
    this.form.reset()
  }

  delete(hero: Hero): void {
    this.deleteHero.emit(hero.id);
  }
}
