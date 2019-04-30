import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {RGBState, selectRgbState} from '../../redux/app.state';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  getRgbState: Observable<any>;
  color = null;

  constructor(private store: Store<RGBState>) {
    this.getRgbState = this.store.select(selectRgbState);
  }

  ngOnInit() {
    this.getRgbState.subscribe((state) => {
      this.color=state.color;
    });
  }
}
