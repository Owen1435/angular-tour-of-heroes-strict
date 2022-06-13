import {JiraPageActions, jiraPageActionsType} from './jira-page.actions';
import {Task} from "../model/task";

export const jiraPageKey = 'jiraPage';

export interface JiraPageState {
  tasks: Task[];
  statuses: string[];
}

const initialState: JiraPageState = {
  tasks: [],
  statuses: ['backlog', 'todo', 'done']
};

export const jiraPageReducer = (state = initialState, action: JiraPageActions) => {
  switch (action.type) {
    case jiraPageActionsType.SET_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks
      };
    case jiraPageActionsType.UPDATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter(t => t.id !== action.payload.task.id), action.payload.task]
      };
    // case jiraPageActionsType.ADD_TASK:
    //   return {
    //     ...state,
    //     task: action.payload.tasks
    //   };
    default:
      return state;
  }
}
