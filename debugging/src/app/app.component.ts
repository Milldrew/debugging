import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter$;
  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
  }
  title = 'mock';
  amount = 0;
  reset() {
    this.store.dispatch({ type: 'RESET' });
  }
  decrement() {
    this.store.dispatch({ type: 'DECREMENT' });
  }
  increment() {
    this.store.dispatch({ type: 'INCREMENT' });
  }
  incrementAmount() {
    console.log('hi');
    this.store.dispatch({ type: 'AMOUNT', payload: this.amount });
  }
}

