import { Action } from '@ngrx/store';
import { Aircrafts } from '../model/aircrafts';

export enum AircraftsActionsTypes {
  GET_ALL_AIRCRAFTS = '[Aircrafts] Get All Aircrafts',
  GET_ALL_AIRCRAFTS_SUCCESS = '[Aircrafts] Get All Aircrafts Success',
  GET_ALL_AIRCRAFTS_ERROR = '[Aircrafts] Get All Aircrafts Error',
}

export class GetAllAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;

  constructor(public playload: any) {}
}

export class GetAllAircraftsSuccess implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;

  constructor(public playload: Aircrafts[]) {}
}

export class GetAllAircraftsError implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;

  constructor(public playload: string) {}
}

export type AircraftsActions =
  | GetAllAircraftsAction
  | GetAllAircraftsSuccess
  | GetAllAircraftsError;
