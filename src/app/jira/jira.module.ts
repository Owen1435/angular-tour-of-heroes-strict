import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {JiraRoutingModule} from "./jira-routing.module";
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { JiraHomePageComponent } from './components/jira-home-page/jira-home-page.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { TaskComponent } from './components/task/task.component';
import {JiraPageEffects} from "./state-management/jira-page.effects";
import {TasksService} from "./services/tasks.service";
import {jiraPageKey, jiraPageReducer} from "./state-management/jira-page.reducer";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    KanbanBoardComponent,
    JiraHomePageComponent,
    BoardColumnComponent,
    TaskComponent,
    AddTaskDialogComponent
  ],
  imports: [
    CommonModule,
    JiraRoutingModule,
    DragDropModule,
    MatDialogModule,
    StoreModule.forFeature(jiraPageKey, jiraPageReducer),
    EffectsModule.forFeature([JiraPageEffects]),
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ScrollingModule,
  ],
  providers: [
    TasksService
  ]
})
export class JiraModule { }
