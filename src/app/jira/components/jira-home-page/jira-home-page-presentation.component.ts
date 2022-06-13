import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AddTaskDialogComponent} from "../add-task-dialog/add-task-dialog.component";
import {MatDialog} from '@angular/material/dialog';
import {AddTaskRequestDto} from "../../model/add-task.request.dto";

@Component({
  selector: 'app-jira-home-page-presentation',
  templateUrl: './jira-home-page.component.html',
  styleUrls: ['./jira-home-page.component.scss']
})
export class JiraHomePagePresentationComponent{

  @Input()
  statuses: string[] | undefined

  @Output()
  addTask: EventEmitter<AddTaskRequestDto> = new EventEmitter<AddTaskRequestDto>();

  constructor(
    public dialog: MatDialog,
  ) {}

  openAddTaskDialog() {
    const addTask = (task: AddTaskRequestDto) => {
      this.addTask.emit(task)
    }

    this.dialog.open(AddTaskDialogComponent, {
      minWidth: '300px',
      data: {
        submitFunc: addTask,
        statuses: this.statuses
      },
    });
  }
}
