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

  countIn: string[] = ['1','-','-','-','2','-','-','-','3','-','-','-','4','-','-','-',];
  section: Section= new Section("",[],"");

  firstStringArr: string[] = this.countIn;
  secondStringArr: string[] = this.countIn;
  thirdStringArr: string[] = this.countIn;
  fourthStringArr: string[] = this.countIn;
  fifthStringArr: string[] = this.countIn;
  sixthStringArr: string[] = this.countIn;

  Beat80: any;
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

  playAudio() {

      this.Beat80.pause();
      this.Beat80.currentTime = 0;
      this.Beat80.play();

  }

  FirstStringPlayAudio(note: string) {

    if(note==="a"){
      this.A2.pause();
      this.A2.currentTime = 0;
      this.A2.play();
      console.log('recognized a on first string');
    }
    if(note==="g"){
      this.G2.pause();
      this.G2.currentTime = 0;
      this.G2.play();
      console.log('recognized g on first string');
    }
    if(note==="f"){
      this.F2.pause();
      this.F2.currentTime = 0;
      this.F2.play();
      console.log('recognized g on first string');
    }
    if(note==="e"){
      this.E2.pause();
      this.E2.currentTime = 0;
      this.E2.play();
      console.log('recognized g on first string');
    }
    if(note==="b"){
      this.B2.pause();
      this.B2.currentTime = 0;
      this.B2.play();
      console.log('recognized g on first string');
    }
    if(note==="c"){
      this.C3.pause();
      this.C3.currentTime = 0;
      this.C3.play();
      console.log('recognized g on first string');
    }
    if(note==="d"){
      this.D3.pause();
      this.D3.currentTime = 0;
      this.D3.play();
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
    this.Beat80 = document.getElementById("Beat80");
    this.A2 = document.getElementById("A2");
    this.G2 = document.getElementById("G2");
    this.F2 = document.getElementById("F2");
    this.E2 = document.getElementById("E2");
    this.B2 = document.getElementById("B2");
    this.C3 = document.getElementById("C3");
    this.D3 = document.getElementById("B3");


  }

  startScrolling(){
    // context allows for this to be used in setInterval setting.
    var context = this;

    //audio test
    this.playAudio();
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

    let _firstArr: string[] = this.firstStringArr;
    let _secondArr: string[] = this.secondStringArr;
    let _thirdArr: string[] = this.thirdStringArr;
    let _fourthArr: string[] = this.fourthStringArr;
    let _fifthArr: string[] = this.fifthStringArr;
    let _sixthArr: string[] = this.sixthStringArr;

    for (let i = 0; i < this.section.content.length; i++) {

      _firstArr = (_firstArr + "," + this.section.content[i][0]).split(',');
      _secondArr= (_secondArr + "," + this.section.content[i][1]).split(',');
      _thirdArr = (_thirdArr + "," + this.section.content[i][2]).split(',');
      _fourthArr = (_fourthArr + "," + this.section.content[i][3]).split(',');
      _fifthArr = (_fifthArr + "," + this.section.content[i][4]).split(',');
      _sixthArr = (_sixthArr + "," + this.section.content[i][5]).split(',');

      // let _firstArr: string[]= [].push.apply(this.firstStringArr, this.section.content[i][0]);

      // console.log("this.section.content[i][0]" + this.section.content[i][0]);
      console.log("_firstArr 0 :" + typeof(_firstArr[0]));
    }
    console.log("_firstArr" + typeof(_firstArr));

    this.firstStringArr = _firstArr;
    this.secondStringArr = _secondArr;
    this.thirdStringArr = _thirdArr;
    this.fourthStringArr = _fourthArr;
    this.fifthStringArr = _fifthArr;
    this.sixthStringArr = _sixthArr;


    let sectionLength: number = _firstArr.length;
    // let sectionLength: number = this.firstStringArr.length;
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
        console.log("_firstArr[1]"+_firstArr[1]);
        context.FirstStringPlayAudio(_firstArr[0]);
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
      }, 375);
  }
}
