import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {RGBState} from '../../redux/app.state';
import {Blue, Green, Red} from '../../redux/app.actions';
import {selectRgbState} from '../../redux/app.reducers';

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.css']
})
export class RgbComponent implements OnInit {

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

  redClick() {
    console.log("red click");
    this.store.dispatch(new Red());
  }

  greenClick() {
    console.log("green click");
    this.store.dispatch(new Green());
  }

  blueClick() {
    console.log("blue click");
    this.store.dispatch(new Blue());
  }

}
