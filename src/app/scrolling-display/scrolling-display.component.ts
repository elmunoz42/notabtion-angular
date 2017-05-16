import { Component, OnInit } from '@angular/core';
import { Section } from '../section';
import { Song } from '../song';

@Component({
  selector: 'app-scrolling-display',
  templateUrl: './scrolling-display.component.html',
  styleUrls: ['./scrolling-display.component.css']
})
export class ScrollingDisplayComponent implements OnInit {

  section: Section = new Section("",[1,2,3],"");
  
  _firstArr: any[] = [];
  _secondArr: any[] = [];
  _thirdArr: any[] = [];
  _fourthArr: any[] = [];
  _fifthArr: any[] = [];
  _sixthArr: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  startScrolling(){
    this._firstArr.concat(this.section.content[0][0]);
    this._secondArr = this.section.content[0][1];
    this._thirdArr = this.section.content[0][2];
    this._fourthArr = this.section.content[0][3];
    this._fifthArr = this.section.content[0][4];
    this._sixthArr = this.section.content[0][5];
    console.log("_firstArr" + this._firstArr);
    console.log("this.section.content.length: " + this.section.content.length);
    for (let i = 1; i < this.section.content.length; i++) {
      this._firstArr.concat(this.section.content[i][0]);
      this._secondArr.concat(this.section.content[i][1]);
      this._thirdArr.concat(this.section.content[i][2]);
      this._fourthArr.concat(this.section.content[i][3]);
      this._fifthArr.concat(this.section.content[i][4]);
      this._sixthArr.concat(this.section.content[i][5]);
      console.log("this.section.content[i][0]" + this.section.content[i][0]);
      console.log("_firstArr" + this._firstArr);
    }
    let sectionLength: number = this._firstArr.length;
    setTimeout(function(){
      setInterval(function(){
        if(sectionLength>1){
          this._firstArr.splice(0,1);
          this._secondArr.splice(0,1);
          this._thirdArr.splice(0,1);
          this._fourthArr.splice(0,1);
          this._fifthArr .splice(0,1);
          this._sixthArr.splice(0,1);
          console.log("_firstArr at " + this._firstArr);
        }
      }, 250)
    }, 1000);
  }
}
