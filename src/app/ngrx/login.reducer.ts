import { Action } from '@ngrx/store';
import { isLoginActions } from './login.actions';
import { isLoginActionsTypes } from './login.actions';
import { initState, isLoginState, isLoginStateEnum } from './login.state';

export function LoginReducer(state: isLoginState = initState, action: Action) {
  switch (action.type) {
    case isLoginActionsTypes.GET_IS_LOGIN:
      console.log('loading...');
      return { ...state, dataState: isLoginStateEnum.LOADING };

    case isLoginActionsTypes.GET_IS_LOGIN_SUCCESS:
      return {
        ...state,
        dataState: isLoginStateEnum.LOADED,
        aircrafts: (<isLoginActions>action).payload,
      };

    case isLoginActionsTypes.GET_IS_LOGIN_ERROR:
      return {
        ...state,
        dataState: isLoginStateEnum.ERROR,
        errorMessage: (<isLoginActions>action).payload,
      };

    default:
      return { ...state };
  }
}
