import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Crisis } from 'src/app/model/crisis';
import {CRISES} from "../../model/mock-crises";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  crisis?: Crisis

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.crisis = CRISES.find(crisis => crisis.id === Number(params.get('id')))
      })
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
