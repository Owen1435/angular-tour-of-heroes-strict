import { from, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CRISES } from '../../model/mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor() { }

  getCrises() {
    return from(CRISES);
  }

  getCrisis(id: number) {
    return of(CRISES.find(crisis => crisis.id === id))
  }
}

