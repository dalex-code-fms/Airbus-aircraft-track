import { onSubmitActionsTypes } from '../ngrx/login.actions';

export interface Login {
  id: number;
  email: string;
  password: string;
}

export interface LoginAction {
  type: onSubmitActionsTypes;
  payload: any;
}
