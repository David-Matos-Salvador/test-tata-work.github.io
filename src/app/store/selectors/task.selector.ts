import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.state';
import * as TaskReducer from '../reducers/task.reducer';
export const selectTasksFeature = (state: AppState) => state.tasks;

export const selectAllTask = (state: AppState) => state.tasks.collection;
export const selectActiveTaskId = (state: AppState) => state.tasks.activeTaskId;
export const selectedActiveTask = createSelector(
  selectAllTask,
  selectActiveTaskId,
  (tasks, taskId) => {
    return tasks.find((task) => task.id === taskId);
  }
);
