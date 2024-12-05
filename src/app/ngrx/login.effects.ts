import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {
  onSubmitActionsTypes,
  onSubmitActionSuccess,
  onSubmitActionError,
  onSubmitAction,
} from './login.actions';
import { createEffect, ofType, Actions } from '@ngrx/effects';

@Injectable()
export class LoginEffects {
  constructor(private apiService: ApiService, private effectAction: Actions) {}

  onSubmitEffect: Observable<Action> = createEffect(() =>
    this.effectAction.pipe(
      ofType(onSubmitActionsTypes.GET_IS_LOGIN),
      mergeMap((action: onSubmitAction) => {
        return this.apiService.onSubmit(action.payload.email).pipe(
          map((user) => {
            if (user[0].password === action.payload.password) {
              console.log('user connected');
            } else {
              console.log('not conencted');
            }
            return new onSubmitActionSuccess(user);
          }),
          catchError((err) => of(new onSubmitActionError(err.message)))
        );
      })
    )
  );
}
