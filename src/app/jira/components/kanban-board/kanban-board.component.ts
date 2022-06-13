import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Observable} from "rxjs/internal/Observable";
import {Task} from "../../model/task";
import {map} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {JiraPageState} from "../../state-management/jira-page.reducer";
import {statusesSelector, tasksSelector} from "../../state-management/jira-page.selectors";
import {GetTasksRequestAction} from "../../state-management/jira-page.actions";

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  tasks$: Observable<Task[]>
  statuses$: Observable<string[]>

  constructor(
    private tasksService: TasksService,
    private store: Store<JiraPageState>,
  ) {
    this.tasks$ = this.store.pipe(select(tasksSelector))
    this.statuses$ = this.store.pipe(select(statusesSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(new GetTasksRequestAction())
  }

  getTasksForStatus(status: string): Observable<Task[]> {
    return this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.status === status))
    )
  }
}
