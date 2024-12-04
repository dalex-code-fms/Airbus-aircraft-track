import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { AircraftsActionsTypes, getAllAircraftsActionError, getAllAircraftsActionSuccess } from "./aircrafts.actions";
import { createEffect, ofType, Actions } from "@ngrx/effects";

@Injectable ()
export class AircraftsEffects {
    constructor(private apiService: ApiService, private effectAction : Actions){}


getAllAircraftsEffect:Observable<Action> = createEffect(
    () => this.effectAction.pipe(
        ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
        mergeMap((action) => {
            return this.apiService.getAircrafts().pipe(
                map((aircrafts) => new getAllAircraftsActionSuccess(aircrafts)),
                catchError((err) =>of(new getAllAircraftsActionError(err.message)))
            )
        })
    )
);

}
