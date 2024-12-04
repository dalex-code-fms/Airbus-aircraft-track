import { isLoginAction } from './login.actions';
import { isLoginActionsTypes } from './login.actions';
import { isLoginActionSuccess } from './login.actions';

export interface User {
  id: number;
  email: string;
  password: string;
}

export const users: User[] = [
  { id: 1, email: 'elbab@gmail.com', password: '1234' },
  { id: 2, email: 'joanna@gmail.com', password: '1234' },
];

export enum isLoginStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}

export interface isLoginState {
  users: User[]; // ?????
  isLogin: '';
  errorMessage: string;
  dataState: isLoginStateEnum;
}

export const initState: isLoginState = {
  isLogin: '',
  errorMessage: 'Pas de connexion',
  dataState: isLoginStateEnum.INITIAL,
  users: [], // ????
};
