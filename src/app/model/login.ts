import { isLoginActionsTypes } from '../ngrx/login.actions';

export interface Login {
  id: number;
  email: string;
  password: string;
}

export interface LoginAction {
  type: isLoginActionsTypes;
  payload: any;
}
