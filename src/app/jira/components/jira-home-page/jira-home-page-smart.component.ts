import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddTaskRequestDto} from "../../model/add-task.request.dto";
import {select, Store} from "@ngrx/store";
import {JiraPageState} from "../../state-management/jira-page.reducer";
import {AddTaskRequestAction} from "../../state-management/jira-page.actions";
import {statusesSelector} from "../../state-management/jira-page.selectors";
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-jira-home-page-smart',
  template: `
    <app-jira-home-page-presentation
      [statuses]="(statuses$ | async)!"
      (addTask)="addTask($event)"
    >
    </app-jira-home-page-presentation>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JiraHomePageSmartComponent{

  statuses$: Observable<string[]>

  constructor(
    public dialog: MatDialog,
    private store: Store<JiraPageState>,
  ) {
    this.statuses$ = this.store.pipe(select(statusesSelector))
  }

  addTask(task: AddTaskRequestDto) {
    this.store.dispatch(new AddTaskRequestAction({task}))
  }
}
