import { Login } from '../model/login';

export enum onSubmitStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}

export interface onSubmitState {
  users: Login[]; // ?????
  isLogin: '';
  errorMessage: string;
  dataState: onSubmitStateEnum;
}

export const initState: onSubmitState = {
  isLogin: '',
  errorMessage: 'Pas de connexion',
  dataState: onSubmitStateEnum.INITIAL,
  users: [], // ????
};
