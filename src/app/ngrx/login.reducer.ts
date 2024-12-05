import { Action } from '@ngrx/store';
import { onSubmitActions } from './login.actions';
import { onSubmitActionsTypes } from './login.actions';
import { initState, onSubmitState, onSubmitStateEnum } from './login.state';

export function LoginReducer(state: onSubmitState = initState, action: Action) {
  switch (action.type) {
    case onSubmitActionsTypes.GET_IS_LOGIN:
      console.log('loading...');
      return { ...state, dataState: onSubmitStateEnum.LOADING };

    case onSubmitActionsTypes.GET_IS_LOGIN_SUCCESS:
      return {
        ...state,
        dataState: onSubmitStateEnum.LOADED,
        aircrafts: (<onSubmitActions>action).payload,
      };

    case onSubmitActionsTypes.GET_IS_LOGIN_ERROR:
      return {
        ...state,
        dataState: onSubmitStateEnum.ERROR,
        errorMessage: (<onSubmitActions>action).payload,
      };

    default:
      return { ...state };
  }
}
