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

  countIn: any[] = ['1','-','-','-','2','-','-','-','3','-','-','-','4','-','-','-'];
  section: Section= new Section("",[],"");

  firstStringArr: any[] = this.countIn;
  secondStringArr: any[] = this.countIn;
  thirdStringArr: any[] = this.countIn;
  fourthStringArr: any[] = this.countIn;
  fifthStringArr: any[] = this.countIn;
  sixthStringArr: any[] = this.countIn;

  constructor() { }

  ngOnInit() {
  }

  startScrolling(){

    console.log(this.songToDisplay);
    if(this.songToDisplay) {
      console.log(this.songToDisplay.sections);
      this.section = this.songToDisplay.sections[1]; // Zero section empty Just one section for now.
      console.log(this.section);
    }

    console.log("firstStringArr" + this.firstStringArr);
    console.log("this.section.content.length: " + this.section.content.length);

    for (let i = 0; i < this.section.content.length; i++) {

      let _firstArr = [].push.apply(this.firstStringArr, this.section.content[i][0]);
      let _secondArr = [].push.apply(this.secondStringArr, this.section.content[i][1]);
      let _thirdArr = [].push.apply(this.thirdStringArr, this.section.content[i][2]);
      let _fourthArr = [].push.apply(this.fourthStringArr, this.section.content[i][3]);
      let _fifthArr = [].push.apply(this.fifthStringArr, this.section.content[i][4]);
      let _sixthArr = [].push.apply(this.sixthStringArr, this.section.content[i][5]);


      console.log("this.section.content[i][0]" + this.section.content[i][0]);
      console.log("_firstArr" + this.firstStringArr);
    }

    let _firstArr = this.firstStringArr;
    let _secondArr = this.secondStringArr;
    let _thirdArr = this.thirdStringArr;
    let _fourthArr = this.fourthStringArr;
    let _fifthArr = this.fifthStringArr;
    let _sixthArr = this.sixthStringArr;

    let sectionLength: number = this.firstStringArr.length;
    setTimeout(function(){
      setInterval(function(){
        if(sectionLength>1){
          _firstArr.splice(0,1);
          _secondArr.splice(0,1);
          _thirdArr.splice(0,1);
          _fourthArr.splice(0,1);
          _fifthArr .splice(0,1);
          _sixthArr.splice(0,1);
          console.log("firstStringArr at " + this.firstStringArr);
        }
      }, 250)
    }, 1000);
  }
}
