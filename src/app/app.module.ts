import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotationWindowComponent } from './notation-window/notation-window.component';
import { SongFormComponent } from './song-form/song-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotationWindowComponent,
    SongFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
