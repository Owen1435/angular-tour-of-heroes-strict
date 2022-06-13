import { Component, Input, OnInit } from '@angular/core';
import {Task} from "../../model/task";
import {Store} from "@ngrx/store";
import {JiraPageState} from "../../state-management/jira-page.reducer";
import {UpdateTaskAction, UpdateTaskRequestAction} from "../../state-management/jira-page.actions";

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent implements OnInit {

  @Input()
  title: string = ''
  @Input()
  tasks: Task[] = []

  constructor(
    private store: Store<JiraPageState>
  ) { }

  ngOnInit(): void {
  }

  drop(event: any) {
    console.log(event)
    if (event.container.data === event.previousContainer.data) {
      return
    }

    const updatedTask: Task = {
      ...event.item.data,
      status: event.container.data
    }
    this.store.dispatch(new UpdateTaskAction({task: updatedTask})) //todo ?
    this.store.dispatch(new UpdateTaskRequestAction({task: updatedTask}))
  }
}
