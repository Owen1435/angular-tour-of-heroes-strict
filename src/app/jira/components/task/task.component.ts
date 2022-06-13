import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Task} from "../../model/task";
import {Store} from "@ngrx/store";
import {JiraPageState} from "../../state-management/jira-page.reducer";
import {DeleteTaskRequestAction} from "../../state-management/jira-page.actions";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {

  @Input() task: Task | undefined

  constructor(
    private store: Store<JiraPageState>
  ) { }

  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    this.store.dispatch(new DeleteTaskRequestAction({taskId: task.id}))
  }
}
