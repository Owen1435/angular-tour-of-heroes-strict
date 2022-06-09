import { Component, OnInit } from '@angular/core';
import { Crisis } from 'src/app/model/crisis';
import {CRISES} from "../../../model/mock-crises";

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[] = []

  constructor() { }

  ngOnInit(): void {
    this.crises = CRISES
  }

}
