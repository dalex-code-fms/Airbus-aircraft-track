import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircrafts } from '../model/aircrafts';

@Injectable({
  providedIn: 'root',
})
export class AircraftsService {
  constructor(private http: HttpClient) {}

  public getAircrafts(): Observable<Aircrafts[]> {
    let host =
      Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircrafts[]>(`${environment.host}/aircrafts`);
  }
}
