import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../section';
import { Song } from '../song';

@Component({
  selector: 'app-scrolling-display',
  templateUrl: './scrolling-display.component.html',
  styleUrls: ['./scrolling-display.component.css']
})
export class ScrollingDisplayComponent implements OnInit {

  @Input() songToDisplay;

  countIn: string[] = ['1','-','-','-','2','-','-','-','3','-','-','-','4','-','-','-'];
  section: Section= new Section("",[],"");

  firstStringArr: string[] = this.countIn;
  secondStringArr: string[] = this.countIn;
  thirdStringArr: string[] = this.countIn;
  fourthStringArr: string[] = this.countIn;
  fifthStringArr: string[] = this.countIn;
  sixthStringArr: string[] = this.countIn;

  // create variables for all audio elements.
  A1: any;
  A2: any;
  A3: any;
  AS1: any;
  AS2: any;
  AS3: any;
  B1: any;
  B2: any;
  B3: any;
  C1: any;
  C2: any;
  C3: any;
  CS1: any;
  CS2: any;
  CS3: any;
  D1: any;
  D2: any;
  D3: any;
  DS1: any;
  DS2: any;
  DS3: any;
  E1: any;
  E2: any;
  E3: any;
  F1: any;
  F2: any;
  F3: any;
  FS1: any;
  FS2: any;
  FS3: any;
  G1: any;
  G2: any;
  G3: any;
  GS1: any;
  GS2: any;
  GS3: any;




  constructor() { }

  playAudio(note: string) {
    if(note!=""){
      this.A3.pause();
      this.A3.currentTime = 0;
      this.A3.play();
    }
  }

  FirstStringPlayAudio(note: string) {

    if(note==="a"){
      this.A3.pause();
      this.A3.currentTime = 0;
      this.A3.play();
      console.log('recognized a on first string');
    }
    if(note==="g"){
      this.G2.pause();
      this.G2.currentTime = 0;
      this.G2.play();
      console.log('recognized g on first string');
    }

  }

  SecondStringPlayAudio(note: string = "") {
    if(note==="a"){
      this.A3.pause();
      this.A3.currentTime = 0;
      this.A3.play();
      console.log('recognized a on first string');
    }
    if(note==="g"){
      this.G2.pause();
      this.G2.currentTime = 0;
      this.G2.play();
      console.log('recognized g on first string');
    }
  }

  ngOnInit() {
    this.A3 = document.getElementById("A3");
    console.log("this.A3"+this.A3);
    this.G2 = document.getElementById("G2");
    console.log("this.G2"+this.G2);
  }

  startScrolling(){
    // context allows for this to be used in setInterval setting.
    var context = this;

    //audio test
    this.FirstStringPlayAudio("a");
    // this.SecondStringPlayAudio("a");
    // console.log(this.songToDisplay);

    // if there's a song this.section is equal to the song's section.
    if(this.songToDisplay) {
      console.log("this.songToDisplay.sections"+this.songToDisplay.sections);
      this.section = this.songToDisplay.sections[1];
      // Zero section empty Just one section for now.
      console.log("this.section"+typeof(this.section.content[1][0][0])+this.section.content[1][0][0]);

    }

    console.log("firstStringArr" + this.firstStringArr);
    console.log("this.section.content.length: " + this.section.content.length);

    for (let i = 0; i < this.section.content.length; i++) {

      let _firstArr: string[]= [].push.apply(this.firstStringArr, this.section.content[i][0]);
      let _secondArr: string[]= [].push.apply(this.secondStringArr, this.section.content[i][1]);
      let _thirdArr: string[] = [].push.apply(this.thirdStringArr, this.section.content[i][2]);
      let _fourthArr: string[] = [].push.apply(this.fourthStringArr, this.section.content[i][3]);
      let _fifthArr: string[] = [].push.apply(this.fifthStringArr, this.section.content[i][4]);
      let _sixthArr: string[] = [].push.apply(this.sixthStringArr, this.section.content[i][5]);


      console.log("this.section.content[i][0]" + this.section.content[i][0]);
      console.log("_firstArr" + typeof(_firstArr[0]));
    }

    let _firstArr = this.firstStringArr;
    let _secondArr = this.secondStringArr;
    let _thirdArr = this.thirdStringArr;
    let _fourthArr = this.fourthStringArr;
    let _fifthArr = this.fifthStringArr;
    let _sixthArr = this.sixthStringArr;

    let sectionLength: number = this.firstStringArr.length;
    // setTimeout(function(){
      setInterval(function(){
        if(sectionLength>1){
          _firstArr.splice(0,1);
          _secondArr.splice(0,1);
          _thirdArr.splice(0,1);
          _fourthArr.splice(0,1);
          _fifthArr .splice(0,1);
          _sixthArr.splice(0,1);
          console.log("firstStringArr at " + _firstArr[0]);
        }
        if(!_firstArr[1]){
            _firstArr[1]='';
        }
        console.log(_firstArr[1]);
        context.FirstStringPlayAudio(_firstArr[0].toString());
          // console.log(_firstArr[1]);
          // this.SecondStringPlayAudio(_firstArr[1].toString());
          // console.log(_firstArr[2]);
          // this.playAudio(_firstArr[2].toString());
          // console.log(_firstArr[3]);
          // this.playAudio(_firstArr[3].toString());
          // console.log(_firstArr[4]);
          // this.playAudio(_firstArr[4].toString());
          // console.log(_firstArr[5]);
          // this.playAudio(_firstArr[5].toString());
      }, 250);
    // }, 1000);
  }
}
