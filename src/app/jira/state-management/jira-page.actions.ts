import { Action } from '@ngrx/store';
import {Task} from "../model/task";
import {AddTaskRequestDto} from "../model/add-task.request.dto";

export enum jiraPageActionsType {
  GET_TASKS_REQUEST = '[jira-page] GET_TASKS_REQUEST',
  SET_TASKS = '[jira-page] SET_TASKS',
  UPDATE_TASK_REQUEST = '[jira-page] UPDATE_TASK_REQUEST',
  UPDATE_TASK = '[jira-page] UPDATE_TASK',
  ADD_TASK_REQUEST = '[jira-page] ADD_TASK_REQUEST',
  ADD_TASK = '[jira-page] ADD_TASK',
  DELETE_TASK_REQUEST = '[jira-page] DELETE_TASK_REQUEST',
}

export class GetTasksRequestAction implements Action {
  readonly type = jiraPageActionsType.GET_TASKS_REQUEST;
}

export class SetTasksAction implements Action {
  readonly type = jiraPageActionsType.SET_TASKS;
  constructor(public payload: {
    tasks: Task[];
  }) {}
}

export class UpdateTaskRequestAction implements Action {
  readonly type = jiraPageActionsType.UPDATE_TASK_REQUEST;
  constructor(public payload: {
    task: Task;
  }) {}
}

export class UpdateTaskAction implements Action {
  readonly type = jiraPageActionsType.UPDATE_TASK;
  constructor(public payload: {
    task: Task;
  }) {}
}

export class AddTaskRequestAction implements Action {
  readonly type = jiraPageActionsType.ADD_TASK_REQUEST;
  constructor(public payload: {
    task: AddTaskRequestDto;
  }) {}
}

export class AddTaskAction implements Action {
  readonly type = jiraPageActionsType.ADD_TASK;
  constructor(public payload: {
    task: Task;
  }) {}
}

export class DeleteTaskRequestAction implements Action {
  readonly type = jiraPageActionsType.DELETE_TASK_REQUEST;
  constructor(public payload: {
    taskId: number;
  }) {}
}

export type JiraPageActions
  = SetTasksAction
  | GetTasksRequestAction
  | UpdateTaskAction
  | UpdateTaskRequestAction
  | AddTaskRequestAction
  | AddTaskAction
  | DeleteTaskRequestAction
