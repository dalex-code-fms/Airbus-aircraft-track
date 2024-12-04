import { Action } from '@ngrx/store';

export enum isLoginActionsTypes {
  GET_IS_LOGIN = '',
  GET_IS_LOGIN_SUCCESS = '',
  GET_IS_LOGIN_ERROR = '',
  // GET_DESIGNED_ ??
  // GET_DEVELOPMENT_  ??
  // GET_SEARCH_  ??
}

export class isLoginAction implements Action {
  type: isLoginActionsTypes = isLoginActionsTypes.GET_IS_LOGIN;
  constructor(public payload: any) {}
}

export class isLoginActionSuccess implements Action {
  type: isLoginActionsTypes = isLoginActionsTypes.GET_IS_LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class isLoginActionError implements Action {
  type: isLoginActionsTypes = isLoginActionsTypes.GET_IS_LOGIN_ERROR;
  constructor(public payload: string) {}
}

export type isLoginActions =
  | isLoginAction
  | isLoginActionSuccess
  | isLoginActionError;
