import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircrafts } from '../model/aircrafts';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAircrafts(): Observable<Aircrafts[]> {
    let host =
      Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircrafts[]>(host + '/aircrafts');
  }

  public onSubmit(email: String, password: String): Observable<Login> {
    let host =
      Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Login>(environment.host + '/users?email=' + email);
  }
}
