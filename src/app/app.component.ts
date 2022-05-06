import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UciManagerState } from './store';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'simple-uci-manager';
  changesInPage: boolean = false;

  constructor(
    private store: Store<UciManagerState>, 
  ){

  }

  ngOnInit(): void {
    this.store.pipe(
      select(state => state.app.isCurrentPageDirty),
      skipWhile(value => value === this.changesInPage)
    )
    .subscribe(storeValue => this.changesInPage = storeValue);
  }
}
