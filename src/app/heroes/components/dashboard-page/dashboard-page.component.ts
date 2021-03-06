import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../model/hero';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((response: any) => {
      this.heroes = response.heroes.slice(1, 5);
    })
  }
}
