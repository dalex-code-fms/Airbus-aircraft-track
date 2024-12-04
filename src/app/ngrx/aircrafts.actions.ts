import { Action } from "@ngrx/store";
import { Aircrafts } from "../model/aircrafts";

export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",
    // GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    // GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Development Aircrafts",
    // GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts",
  }
  
  export class getAllAircraftsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload : any) {}
  }
  
  export class getAllAircraftsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload : Aircrafts[]){}
  }
  
  export class getAllAircraftsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload:string){}
  }
  
  export type AircraftsActions = getAllAircraftsAction | getAllAircraftsActionSuccess | getAllAircraftsActionError;