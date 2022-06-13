import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../model/hero';
import {Task} from "../../jira/model/task";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const tasks: Task[] = [
      { id: 121, title: 'Dr. Nice', status: 'todo', order: 1 },
      { id: 122, title: 'Bombasto', status: 'todo', order: 2  },
      { id: 123, title: 'Magneta', status: 'todo', order: 3  },
      { id: 124, title: 'Tornado', status: 'backlog', order: 1  },
      { id: 125, title: 'Magma', status: 'done', order: 1  },
    ]

    return {heroes, tasks};
  }

  genId(): number {
    return Date.now()
  }
}
