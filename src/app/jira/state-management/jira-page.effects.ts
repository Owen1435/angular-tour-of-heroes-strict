import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import {TasksService} from "../services/tasks.service";
import {
  AddTaskRequestAction, DeleteTaskRequestAction,
  GetTasksRequestAction,
  jiraPageActionsType,
  SetTasksAction,
  UpdateTaskRequestAction
} from "./jira-page.actions";

@Injectable()
export class JiraPageEffects {
  constructor(
    private actions$: Actions,
    private tasksService: TasksService
  ) {}

  getTasks$ = createEffect(() => this.actions$.pipe(
    ofType<GetTasksRequestAction>(jiraPageActionsType.GET_TASKS_REQUEST),
    mergeMap(() => this.tasksService.getTasks().pipe(
      map((tasks) => {
        return new SetTasksAction({tasks})
      }),
      catchError(() => of({ type: 'something was wrong' }))
    )),
  ))

  updateTask$ = createEffect(() => this.actions$.pipe(
    ofType<UpdateTaskRequestAction>(jiraPageActionsType.UPDATE_TASK_REQUEST),
    map(action => action.payload),
    mergeMap((payload) => this.tasksService.updateTask(payload.task).pipe(
      map((task) => {
        return new GetTasksRequestAction()
        // return new AddHeroAction({
        //   hero: hero
        // })
      })
    ))
  ))

  addTask$ = createEffect(() => this.actions$.pipe(
    ofType<AddTaskRequestAction>(jiraPageActionsType.ADD_TASK_REQUEST),
    map(action => action.payload),
    mergeMap((payload) => this.tasksService.addTask(payload.task).pipe(
      map((task) => {
        return new GetTasksRequestAction()
        // return new AddTaskAction({task})
      }),
      catchError(() => of({ type: 'something was wrong' }))
    )),
  ))

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType<DeleteTaskRequestAction>(jiraPageActionsType.DELETE_TASK_REQUEST),
    map(action => action.payload),
    mergeMap((payload) => this.tasksService.deleteTask(payload.taskId).pipe(
      map((task) => {
        return new GetTasksRequestAction()
      }),
      catchError(() => of({ type: 'something was wrong' }))
    )),
  ))
}
