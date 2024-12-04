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
  state: any;
  user: any;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.LoginState$ = this.store.pipe(map((state: any) => state.airbusState));
    this.LoginState$ = this.store.select('login');
    console.log('LoginState:', this.state);
    this.user = { id: 1, email: 'elbab@gmail.com', password: '1234' };
  }

  //users: { id: number; email: string; password: string }[] = [];

  // ngOnInit(): void {
  //   this.isLoginState$ = this.store.pipe(
  //     map((state)=>state.airbusState)
  //   );
  // }

  isLogin() {
    this.store.dispatch(new isLoginAction({}));
  }
}
