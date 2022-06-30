import * as TaskReducer from '../reducers/task.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { loginReducer } from '../reducers/login.reducer';
import { taskReducer } from '../reducers/task.reducer';

export interface AppState {
  login: boolean;
  tasks: TaskReducer.State;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  login: loginReducer,
  tasks: taskReducer,
};
