import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Action } from '@ngrx/store';
import {
  catchError,
  debounceTime,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import {
  AircraftsActionsTypes,
  getAllAircraftsActionError,
  getAllAircraftsActionSuccess,
  setSearchKeywordAction,
} from './aircrafts.actions';
import { createEffect, ofType, Actions } from '@ngrx/effects';

@Injectable()
export class AircraftsEffects {
  constructor(private apiService: ApiService, private effectAction: Actions) {}

  getAircraftsBySearchName: Observable<Action> = createEffect(() =>
    this.effectAction.pipe(
      ofType(AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS),
      switchMap((action: setSearchKeywordAction) => {
        const searchKeyword = action.payload;

        return this.apiService.getAircrafts().pipe(
          map((aicrafts) => {
            const filteredAircrafts = aicrafts.filter((aicraft) =>
              aicraft.name.toLowerCase().includes(searchKeyword.toLowerCase())
            );
            return new getAllAircraftsActionSuccess(filteredAircrafts);
          }),
          catchError((err) => of(new getAllAircraftsActionError(err.message)))
        );
      })
    )
  );

  //   getAircraftsBySearchPhase: Observable<Action> = createEffect(() =>
  //     this.effectAction.pipe(
  //       ofType(AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS),
  //       switchMap((action: setSearchKeywordAction) => {
  //         const searchKeyword = action.payload;

  //         return this.apiService.getAircrafts().pipe(
  //           map((aicrafts) => {
  //             const filteredAircrafts = aicrafts.filter((aicraft) =>
  //               aicraft.phase.toLowerCase().includes(searchKeyword.toLowerCase())
  //             );
  //             return new getAllAircraftsActionSuccess(filteredAircrafts);
  //           }),
  //           catchError((err) => of(new getAllAircraftsActionError(err.message)))
  //         );
  //       })
  //     )
  //   );

  getAllAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectAction.pipe(
      ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
      mergeMap((action) => {
        return this.apiService.getAircrafts().pipe(
          map((aircrafts) => new getAllAircraftsActionSuccess(aircrafts)),
          catchError((err) => of(new getAllAircraftsActionError(err.message)))
        );
      })
    )
  );
}
