import { Action } from '@ngrx/store';

export enum onSubmitActionsTypes {
  GET_IS_LOGIN = '[Login] Login',
  GET_IS_LOGIN_SUCCESS = '[Login] Login Success',
  GET_IS_LOGIN_ERROR = '[Login] Login Error',
  // GET_DESIGNED_ ??
  // GET_DEVELOPMENT_  ??
  // GET_SEARCH_  ??
}

export class onSubmitAction implements Action {
  type: onSubmitActionsTypes = onSubmitActionsTypes.GET_IS_LOGIN;
  constructor(public payload: { email: String; password: String }) {}
}

export class onSubmitActionSuccess implements Action {
  type: onSubmitActionsTypes = onSubmitActionsTypes.GET_IS_LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class onSubmitActionError implements Action {
  type: onSubmitActionsTypes = onSubmitActionsTypes.GET_IS_LOGIN_ERROR;
  constructor(public payload: string) {}
}

export type onSubmitActions =
  | onSubmitAction
  | onSubmitActionSuccess
  | onSubmitActionError;
