import { createFeatureSelector, createSelector } from '@ngrx/store';
import {jiraPageKey, JiraPageState} from "./jira-page.reducer";

export const featureSelector = createFeatureSelector<JiraPageState>(jiraPageKey);

export const tasksSelector = createSelector(
  featureSelector,
  (state) => state.tasks
);

export const statusesSelector = createSelector(
  featureSelector,
  (state) => state.statuses
);
