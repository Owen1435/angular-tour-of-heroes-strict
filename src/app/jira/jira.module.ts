import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {JiraRoutingModule} from "./jira-routing.module";
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
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
import {JiraHomePageSmartComponent} from "./components/jira-home-page/jira-home-page-smart.component";
import {JiraHomePagePresentationComponent} from "./components/jira-home-page/jira-home-page-presentation.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    KanbanBoardComponent,
    JiraHomePageSmartComponent,
    JiraHomePagePresentationComponent,
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
    MatCardModule,
  ],
  providers: [
    TasksService
  ]
})
export class JiraModule { }
