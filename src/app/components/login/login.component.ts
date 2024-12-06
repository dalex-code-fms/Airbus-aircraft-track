import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { onSubmitAction } from 'src/app/ngrx/login.actions';
import { onSubmitState, onSubmitStateEnum } from 'src/app/ngrx/login.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  LoginState$: Observable<onSubmitState> | null = null;
  readonly aircraftsStateEnum = onSubmitStateEnum;
  state: any;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    // this.LoginState$ = this.store.pipe(map((state: any) => state.loginState));
    // this.LoginState$ = this.store.select('login');
    // // //console.log('LoginState:', this.state);
    // console.log(this.LoginState$);
  }

  onSubmit() {
    this.store.dispatch(
      new onSubmitAction({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
    );

    this.router.navigateByUrl('aircrafts');
  }
}
