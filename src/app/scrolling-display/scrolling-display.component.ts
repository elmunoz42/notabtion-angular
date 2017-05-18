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

    if(note==="e"){
      this.E3.pause();
      this.E3.currentTime = 0;
      this.E3.play();
      console.log('recognized g on first string');
    }
    if(note==="f"){
      this.F3.pause();
      this.F3.currentTime = 0;
      this.F3.play();
      console.log('recognized g on first string');
    }
    if(note==="g"){
      this.G3.pause();
      this.G3.currentTime = 0;
      this.G3.play();
      console.log('recognized g on first string');
    }
    if(note==="a"){
      this.A3.pause();
      this.A3.currentTime = 0;
      this.A3.play();
      console.log('recognized a on first string');
    }
    if(note==="b"){
      this.B3.pause();
      this.B3.currentTime = 0;
      this.B3.play();
      console.log('recognized g on first string');
    }

  }

  SecondStringPlayAudio(note: string = "") {
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
    if(note==="e"){
      this.E3.pause();
      this.E3.currentTime = 0;
      this.E3.play();
      console.log('recognized g on first string');
    }
    if(note==="f"){
      this.F3.pause();
      this.F3.currentTime = 0;
      this.F3.play();
      console.log('recognized g on first string');
    }
    if(note==="g"){
      this.G3.pause();
      this.G3.currentTime = 0;
      this.G3.play();
      console.log('recognized g on first string');
    }
    if(note==="a"){
      this.A3.pause();
      this.A3.currentTime = 0;
      this.A3.play();
      console.log('recognized a on first string');
    }
  }

  ThirdStringPlayAudio(note: string = "") {
    if(note==="g"){
      this.G2.pause();
      this.G2.currentTime = 0;
      this.G2.play();
      console.log('recognized g on first string');
    }
    if(note==="a"){
      this.A2.pause();
      this.A2.currentTime = 0;
      this.A2.play();
      console.log('recognized a on first string');
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
    if(note==="e"){
      this.E3.pause();
      this.E3.currentTime = 0;
      this.E3.play();
      console.log('recognized g on first string');
    }
    if(note==="f"){
      this.F3.pause();
      this.F3.currentTime = 0;
      this.F3.play();
      console.log('recognized g on first string');
    }

  }

  FourthStringPlayAudio(note: string = "") {

    if(note==="d"){
      this.D2.pause();
      this.D2.currentTime = 0;
      this.D2.play();
      console.log('recognized g on first string');
    }
    if(note==="e"){
      this.E2.pause();
      this.E2.currentTime = 0;
      this.E2.play();
      console.log('recognized g on first string');
    }
    if(note==="f"){
      this.F2.pause();
      this.F2.currentTime = 0;
      this.F2.play();
      console.log('recognized g on first string');
    }
    if(note==="g"){
      this.G2.pause();
      this.G2.currentTime = 0;
      this.G2.play();
      console.log('recognized g on first string');
    }
    if(note==="a"){
      this.A2.pause();
      this.A2.currentTime = 0;
      this.A2.play();
      console.log('recognized a on first string');
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
  }
  FifthStringPlayAudio(note: string = "") {
    if(note==="a"){
      this.A1.pause();
      this.A1.currentTime = 0;
      this.A1.play();
      console.log('recognized a on first string');
    }
    if(note==="b"){
      this.B1.pause();
      this.B1.currentTime = 0;
      this.B1.play();
      console.log('recognized b on first string');
    }
    if(note==="c"){
      this.C2.pause();
      this.C2.currentTime = 0;
      this.C2.play();
      console.log('recognized c on first string');
    }
    if(note==="d"){
      this.D2.pause();
      this.D2.currentTime = 0;
      this.D2.play();
      console.log('recognized d on first string');
    }
    if(note==="e"){
      this.E2.pause();
      this.E2.currentTime = 0;
      this.E2.play();
      console.log('recognized e on first string');
    }
    if(note==="f"){
      this.F2.pause();
      this.F2.currentTime = 0;
      this.F2.play();
      console.log('recognized f on first string');
    }
    if(note==="g"){
      this.G2.pause();
      this.G2.currentTime = 0;
      this.G2.play();
      console.log('recognized g on first string');
    }

  }
  SixthStringPlayAudio(note: string = "") {
    if(note==="e"){
      this.E1.pause();
      this.E1.currentTime = 0;
      this.E1.play();
      console.log('recognized g on first string');
    }
    if(note==="f"){
      this.F1.pause();
      this.F1.currentTime = 0;
      this.F1.play();
      console.log('recognized g on first string');
    }
    if(note==="g"){
      this.G1.pause();
      this.G1.currentTime = 0;
      this.G1.play();
      console.log('recognized g on first string');
    }
    if(note==="a"){
      this.A1.pause();
      this.A1.currentTime = 0;
      this.A1.play();
      console.log('recognized a on first string');
    }
    if(note==="b"){
      this.B1.pause();
      this.B1.currentTime = 0;
      this.B1.play();
      console.log('recognized g on first string');
    }
    if(note==="c"){
      this.C2.pause();
      this.C2.currentTime = 0;
      this.C2.play();
      console.log('recognized g on first string');
    }
    if(note==="d"){
      this.D2.pause();
      this.D2.currentTime = 0;
      this.D2.play();
      console.log('recognized g on first string');
    }

  }

  ngOnInit() {
    this.Beat80 = document.getElementById("Beat80");
    this.C1 = document.getElementById("C1");
    this.D1 = document.getElementById("D1");
    this.E1 = document.getElementById("E1");
    this.F1 = document.getElementById("F1");
    this.G1 = document.getElementById("G1");
    this.A1 = document.getElementById("A1");
    this.B1 = document.getElementById("B1");
    this.C2 = document.getElementById("C2");
    this.D2 = document.getElementById("D3");
    this.E2 = document.getElementById("E2");
    this.F2 = document.getElementById("F2");
    this.G2 = document.getElementById("G2");
    this.A2 = document.getElementById("A2");
    this.B2 = document.getElementById("B2");
    this.C3 = document.getElementById("C3");
    this.D3 = document.getElementById("D3");
    this.E3 = document.getElementById("E3");
    this.F3 = document.getElementById("F3");
    this.G3 = document.getElementById("G3");
    this.A3 = document.getElementById("A3");

  }

  scrollPlay: any;

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
    context.scrollPlay = setInterval(function(){
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

      context.FirstStringPlayAudio(_firstArr[0]);
        // console.log(_firstArr[1]);
      context.SecondStringPlayAudio(_secondArr[0].toString());
        // console.log(_firstArr[2]);
      context.ThirdStringPlayAudio(_thirdArr[2].toString());
        // console.log(_firstArr[3]);
      context.FourthStringPlayAudio(_fourthArr[3].toString());
        // console.log(_firstArr[4]);
      context.FifthStringPlayAudio(_fifthArr[4].toString());
        // console.log(_firstArr[5]);
      context.SixthStringPlayAudio(_sixthArr[5].toString());
    }, 375);

  }

  stopScrolling() {
    this.Beat80.pause();
    clearInterval(this.scrollPlay);
  }

}
