import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import {AppStore} from '../models/appstore.model';
import 'rxjs/add/operator/map';
import {Track} from '../models/track';
import {soundcloudClientId} from '../config/keys';
import {TrackActions} from '../actions/track';

@Injectable()
export class SoundCloudService {
  tracks: any;

  constructor(private _http:Http, private store: Store<AppStore>) {
    this.tracks = store.select('tracks');
  }

  loadTopTracks() {
 //   const topTracksUrl = 'https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud%3Agenres%3Aall-music&client_id=' + soundcloudClientId + '&limit=24&offset=0&linked_partitioning=1&app_version=1482339819';
    const topTracksUrl = 'http://localhost:3333/toptracks';
    return this._http.get(topTracksUrl)
      .map(res => {
        return res.json().collection.map(item => {
          return {
            id: item.track.id,
            title: item.track.title,
            artist: (item.track.publisher_metadata && item.track.publisher_metadata.artist) ? item.track.publisher_metadata.artist : item.track.user.username,
            imgUrl: item.track.artwork_url,
            streamUrl: 'http://api.soundcloud.com/tracks/' + item.track.id + '/stream?client_id=' + soundcloudClientId,
            duration: item.track.full_duration
          }
        })
      })
      .map(payload => ({ type: TrackActions.LOAD_TRACKS_SUCCESS, payload }))
      .subscribe(action => this.store.dispatch(action));
  }
}