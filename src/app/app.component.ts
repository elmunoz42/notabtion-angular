import { Component } from '@angular/core';
import { Song } from './song';
import { Section } from './section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Notabtion - Scrolling Music Notation for Guitar';
  currentSong: Song = new Song("","","",90);
  masterSongList: Song[] = [];

  addSong(newSongFromChild: Song) {
    this.currentSong = newSongFromChild;
    this.currentSong.form.push(0,1,2,1,2,3,4,1,2,2,5); // Common song form. Intro, Verse, Chorus, Verse, Chorus, Bridge, Solo, Verse, Double Chorus, Coda.
    this.masterSongList.push(newSongFromChild);
    console.log(this.currentSong);
  }

  addSection(newSectionFromChild: Section) {
    this.currentSong.sections.push(newSectionFromChild);
  }
}
