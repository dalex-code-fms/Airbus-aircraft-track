import { Action } from '@ngrx/store';
import {
  AircraftsState,
  AircraftsStateEnum,
  initState,
} from './aircrafts.state';
import {
  AircraftsActions,
  AircraftsActionsTypes,
  setSearchKeywordAction,
} from './aircrafts.actions';

export function AircraftReducer(
  state: AircraftsState = initState,
  action: Action
) {
  switch (action.type) {
    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
      console.log('loading...');
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS: {
      const keyword = (action as setSearchKeywordAction).payload;
      return { ...state, searchKeyword: keyword };
    }

    default:
      return { ...state };
  }
}
