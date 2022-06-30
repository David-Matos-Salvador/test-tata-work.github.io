import { state } from '@angular/animations';
import { createReducer, createSelector, on } from '@ngrx/store';
import { Task } from 'src/app/core/models/task.model';
import * as TaskAction from '../actions/task.action';

export interface State {
  collection: Task[];
  activeTaskId: null | number;
}
const createTask = (tasks: Task[], task: Task) => [
  ...tasks,
  { ...task, id: tasks.length + 1 },
];
const updateTask = (tasks: Task[], changes: Task) => {

  console.log(changes);

  return tasks.map((task) => {
    return task.id == changes.id ? Object.assign({}, task, changes) : task;
  });
};
const deleteTask = (tasks: Task[], idTask: number | null) => {
  return tasks.filter((task) => idTask !== task.id);
};

export const initialState: State = {
  collection: createTask([], { id: 1, description: 'First task' }),
  activeTaskId: null,
};

export const taskReducer = createReducer(
  initialState,
  on(TaskAction.enter, TaskAction.clearSelectedTask, (state, action) => {
    return {
      ...state,
      activeTaskId: null,
    };
  }),
  on(TaskAction.selectedTask, (state, action) => {
    return { ...state, activeTaskId: action.idTask };
  }),
  on(TaskAction.addOrEditTask, (state, action) => {
    return {
      collection:
        state.activeTaskId === null
          ? createTask(state.collection, action.task)
          : updateTask(state.collection, {
              ...action.task,
              id: state.activeTaskId,
            }),
      activeTaskId: null,
    };
  }),
  on(TaskAction.deleteTask, (state, action) => {
    return {
      collection: deleteTask(state.collection, action.task.id),
      activeTaskId: null,
    };
  })
);
