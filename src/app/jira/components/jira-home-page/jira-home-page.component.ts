import { Component } from '@angular/core';
import {AddTaskDialogComponent} from "../add-task-dialog/add-task-dialog.component";
import {MatDialog} from '@angular/material/dialog';
import {AddTaskRequestDto} from "../../model/add-task.request.dto";
import {select, Store} from "@ngrx/store";
import {JiraPageState} from "../../state-management/jira-page.reducer";
import {AddTaskRequestAction} from "../../state-management/jira-page.actions";
import {statusesSelector} from "../../state-management/jira-page.selectors";
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-jira-home-page',
  templateUrl: './jira-home-page.component.html',
  styleUrls: ['./jira-home-page.component.scss']
})
export class JiraHomePageComponent{

  statuses$: Observable<string[]>

  constructor(
    public dialog: MatDialog,
    private store: Store<JiraPageState>,
  ) {
    this.statuses$ = this.store.pipe(select(statusesSelector))
  }

  openAddTaskDialog() {
    const addTask = (task: AddTaskRequestDto) => {
      this.store.dispatch(new AddTaskRequestAction({task}))
    }

    this.dialog.open(AddTaskDialogComponent, {
      minWidth: '300px',
      data: {
        submitFunc: addTask,
        availableStatuses$: this.statuses$
      },
    });
  }
}
