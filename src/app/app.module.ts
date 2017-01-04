import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { SoundCloudService } from './services/soundcloud.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import player from './reducers/player.reducer';
import tracks from './reducers/tracks.reducer';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';

import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerControlsComponent } from './components/player/player-controls/player-controls.component';
import { VolumeControlComponent } from './components/player/volume-control/volume-control.component';
import { TrackInfoComponent } from './components/player/track-info/track-info.component';
import { TrackProgressComponent } from './components/player/track-progress/track-progress.component';

// Application wide providers
const APP_PROVIDERS = [
  SoundCloudService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    TopTracksComponent,
    PlayerComponent,
    PlayerControlsComponent,
    VolumeControlComponent,
    TrackInfoComponent,
    TrackProgressComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({
      player: player,
      tracks: tracks
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    HttpModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor() {}

}
