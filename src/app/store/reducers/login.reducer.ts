import { createReducer, on } from '@ngrx/store';
import * as Login from '../actions/login.action';
export const initialState = false;

export const loginReducer = createReducer(
  initialState,
  on(Login.loggeding, (state) => (state = true)),
  on(Login.logout, (state) => (state = false))
);
