import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Aircrafts } from 'src/app/model/aircrafts';
import { ApiService } from 'src/app/services/api.service';
import { DataStateEnum, AppDataState } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircrafts$ : Observable<AppDataState<Aircrafts[]>> | null = null;
  readonly dataStateEnum = DataStateEnum;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  getAllAircrafts() {
    this.aircrafts$ = this.apiService.getAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    );
  }

}
