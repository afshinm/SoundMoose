import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Track } from '../models';
import { TrackActions } from '../actions';
import * as _ from 'lodash';

export type TracksState = Track[];

const initialState: TracksState = [];

export default function (state = initialState, action: Action): TracksState {
  switch (action.type) {
    case TrackActions.LOAD_TRACKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}