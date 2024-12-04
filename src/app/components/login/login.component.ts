import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { isLoginAction } from 'src/app/ngrx/login.actions';
import { isLoginState, isLoginStateEnum } from 'src/app/ngrx/login.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginState$: Observable<isLoginState> | null = null;
  readonly aircraftsStateEnum = isLoginStateEnum;
  store: any;
  state: any;

  constructor(store: Store<any>) {}

  ngOnInit(): void {
    this.LoginState$ = this.store.pipe(map((state: any) => state.airbusState));

    throw new Error('Method not implemented.');
  }

  users: { id: number; email: string; password: string }[] = [];

  // ngOnInit(): void {
  //   this.isLoginState$ = this.store.pipe(
  //     map((state)=>state.airbusState)
  //   );
  // }

  isLogin() {
    this.store.dispatch(new isLoginAction({}));
  }
}
