import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllAircraftsAction } from 'src/app/ngrx/aircrafts.actions';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  getAllAircrafts(){
    this.store.dispatch (new getAllAircraftsAction({}));
  }

}
