import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { setSearchKeywordAction } from 'src/app/ngrx/aircrafts.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchKeyword: string = '';
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (this.searchKeyword.trim()) {
      this.store.dispatch(
        new setSearchKeywordAction(this.searchKeyword.trim())
      );
    }
  }
}
