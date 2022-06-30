import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/core/models/task.model';

export const enter = createAction('[Task] enter');

export const selectedTask = createAction('[Task] selectedTask', props<{ idTask: number }>());

export const clearSelectedTask = createAction('[Task] clearSelectedTask');

export const addOrEditTask = createAction('[Task] add or Edit', props<{ task: Task }>());

export const deleteTask = createAction('[Task] delete', props<{ task: Task }>());



