import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { onSubmitAction } from 'src/app/ngrx/login.actions';
import { onSubmitState, onSubmitStateEnum } from 'src/app/ngrx/login.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginState$: Observable<onSubmitState> | null = null;
  readonly aircraftsStateEnum = onSubmitStateEnum;
  state: any;
  email: String = '';
  password: String = '';

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.LoginState$ = this.store.pipe(map((state: any) => state.loginState));
    this.LoginState$ = this.store.select('login');
    //console.log('LoginState:', this.state);
    console.log(this.LoginState$);
  }

  //users: { id: number; email: string; password: string }[] = [];

  // ngOnInit(): void {
  //   this.isLoginState$ = this.store.pipe(
  //     map((state)=>state.airbusState)
  //   );
  // }

  onSubmit() {
    this.store.dispatch(
      new onSubmitAction({
        email: this.email,
        password: this.password,
      })
    );
  }
}
