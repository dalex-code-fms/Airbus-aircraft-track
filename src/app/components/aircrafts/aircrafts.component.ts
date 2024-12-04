import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircraftsState$ : Observable<AircraftsState> | null = null;
  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state)=>state.airbusState)
    );
  } 
  
}


