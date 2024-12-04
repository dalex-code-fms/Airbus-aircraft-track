import { Aircrafts } from "../model/aircrafts";

export enum AircraftsStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface AircraftsState {
    aircrafts : Aircrafts[],
    errorMessage: string,
    dataState: AircraftsStateEnum
}

export const initState : AircraftsState = {
    aircrafts : [],
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL
}