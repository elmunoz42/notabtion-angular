import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Section } from './../section';
import { Song } from './../song';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})

export class SongFormComponent implements OnInit {

  @Output() newSongSender = new EventEmitter()
  song: Song = new Song("","","",90);

  constructor() { }

  ngOnInit() {
  }

  saveSong(inputName: string, inputAuthor: string, inputTranscriber: string, inputTempo: any) {

    var newSongToAdd: Song = new Song(inputName, inputAuthor, inputTranscriber, parseInt(inputTempo));
    console.log(newSongToAdd);
    this.newSongSender.emit(newSongToAdd);

  }

}
