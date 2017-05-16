import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Section } from './../section';
import { Song } from './../song';

@Component({
  selector: 'app-notation-window',
  templateUrl: './notation-window.component.html',
  styleUrls: ['./notation-window.component.css']
})
export class NotationWindowComponent implements OnInit {

  @Output() newSectionSender = new EventEmitter()
  section: Section = new Section("",[],"");

  firstStringArr: any[]=[];
  secondStringArr: any[]=[];
  thirdStringArr: any[]=[];
  fourthStringArr: any[]=[];
  fifthStringArr: any[]=[];
  sixthStringArr: any[]=[];
  twoMeasureArr: any[]=[];

  constructor() { }

  ngOnInit() {
  }

  submit(first1,
    first1e,
    first1and,
    first1a,
    first2,
    first2e,
    first2and,
    first2a,
    first3,
    first3e,
    first3and,
    first3a,
    first4,
    first4e,
    first4and,
    first4a,
    first5,
    first5e,
    first5and,
    first5a,
    first6,
    first6e,
    first6and,
    first6a,
    first7,
    first7e,
    first7and,
    first7a,
    first8,
    first8e,
    first8and,
    first8a,
    second1,
    second1e,
    second1and,
    second1a,
    second2,
    second2e,
    second2and,
    second2a,
    second3,
    second3e,
    second3and,
    second3a,
    second4,
    second4e,
    second4and,
    second4a,
    second5,
    second5e,
    second5and,
    second5a,
    second6,
    second6e,
    second6and,
    second6a,
    second7,
    second7e,
    second7and,
    second7a,
    second8,
    second8e,
    second8and,
    second8a,
    third1,
    third1e,
    third1and,
    third1a,
    third2,
    third2e,
    third2and,
    third2a,
    third3,
    third3e,
    third3and,
    third3a,
    third4,
    third4e,
    third4and,
    third4a,
    third5,
    third5e,
    third5and,
    third5a,
    third6,
    third6e,
    third6and,
    third6a,
    third7,
    third7e,
    third7and,
    third7a,
    third8,
    third8e,
    third8and,
    third8a,
    fourth1,
    fourth1e,
    fourth1and,
    fourth1a,
    fourth2,
    fourth2e,
    fourth2and,
    fourth2a,
    fourth3,
    fourth3e,
    fourth3and,
    fourth3a,
    fourth4,
    fourth4e,
    fourth4and,
    fourth4a,
    fourth5,
    fourth5e,
    fourth5and,
    fourth5a,
    fourth6,
    fourth6e,
    fourth6and,
    fourth6a,
    fourth7,
    fourth7e,
    fourth7and,
    fourth7a,
    fourth8,
    fourth8e,
    fourth8and,
    fourth8a,
    fifth1,
    fifth1e,
    fifth1and,
    fifth1a,
    fifth2,
    fifth2e,
    fifth2and,
    fifth2a,
    fifth3,
    fifth3e,
    fifth3and,
    fifth3a,
    fifth4,
    fifth4e,
    fifth4and,
    fifth4a,
    fifth5,
    fifth5e,
    fifth5and,
    fifth5a,
    fifth6,
    fifth6e,
    fifth6and,
    fifth6a,
    fifth7,
    fifth7e,
    fifth7and,
    fifth7a,
    fifth8,
    fifth8e,
    fifth8and,
    fifth8a,
    sixth1,
    sixth1e,
    sixth1and,
    sixth1a,
    sixth2,
    sixth2e,
    sixth2and,
    sixth2a,
    sixth3,
    sixth3e,
    sixth3and,
    sixth3a,
    sixth4,
    sixth4e,
    sixth4and,
    sixth4a,
    sixth5,
    sixth5e,
    sixth5and,
    sixth5a,
    sixth6,
    sixth6e,
    sixth6and,
    sixth6a,
    sixth7,
    sixth7e,
    sixth7and,
    sixth7a,
    sixth8,
    sixth8e,
    sixth8and,
    sixth8a){
      this.firstStringArr=[first1,
        first1e,
        first1and,
        first1a,
        first2,
        first2e,
        first2and,
        first2a,
        first3,
        first3e,
        first3and,
        first3a,
        first4,
        first4e,
        first4and,
        first4a,
        first5,
        first5e,
        first5and,
        first5a,
        first6,
        first6e,
        first6and,
        first6a,
        first7,
        first7e,
        first7and,
        first7a,
        first8,
        first8e,
        first8and,
        first8a];
      this.secondStringArr=[second1,
        second1e,
        second1and,
        second1a,
        second2,
        second2e,
        second2and,
        second2a,
        second3,
        second3e,
        second3and,
        second3a,
        second4,
        second4e,
        second4and,
        second4a,
        second5,
        second5e,
        second5and,
        second5a,
        second6,
        second6e,
        second6and,
        second6a,
        second7,
        second7e,
        second7and,
        second7a,
        second8,
        second8e,
        second8and,
        second8a];
        this.thirdStringArr=[third1,
          third1e,
          third1and,
          third1a,
          third2,
          third2e,
          third2and,
          third2a,
          third3,
          third3e,
          third3and,
          third3a,
          third4,
          third4e,
          third4and,
          third4a,
          third5,
          third5e,
          third5and,
          third5a,
          third6,
          third6e,
          third6and,
          third6a,
          third7,
          third7e,
          third7and,
          third7a,
          third8,
          third8e,
          third8and,
          third8a];
        this.fourthStringArr=[fourth1,
          fourth1e,
          fourth1and,
          fourth1a,
          fourth2,
          fourth2e,
          fourth2and,
          fourth2a,
          fourth3,
          fourth3e,
          fourth3and,
          fourth3a,
          fourth4,
          fourth4e,
          fourth4and,
          fourth4a,
          fourth5,
          fourth5e,
          fourth5and,
          fourth5a,
          fourth6,
          fourth6e,
          fourth6and,
          fourth6a,
          fourth7,
          fourth7e,
          fourth7and,
          fourth7a,
          fourth8,
          fourth8e,
          fourth8and,
          fourth8a];
        this.fifthStringArr=[fifth1,
          fifth1e,
          fifth1and,
          fifth1a,
          fifth2,
          fifth2e,
          fifth2and,
          fifth2a,
          fifth3,
          fifth3e,
          fifth3and,
          fifth3a,
          fifth4,
          fifth4e,
          fifth4and,
          fifth4a,
          fifth5,
          fifth5e,
          fifth5and,
          fifth5a,
          fifth6,
          fifth6e,
          fifth6and,
          fifth6a,
          fifth7,
          fifth7e,
          fifth7and,
          fifth7a,
          fifth8,
          fifth8e,
          fifth8and,
          fifth8a];
        this.sixthStringArr=[sixth1,
          sixth1e,
          sixth1and,
          sixth1a,
          sixth2,
          sixth2e,
          sixth2and,
          sixth2a,
          sixth3,
          sixth3e,
          sixth3and,
          sixth3a,
          sixth4,
          sixth4e,
          sixth4and,
          sixth4a,
          sixth5,
          sixth5e,
          sixth5and,
          sixth5a,
          sixth6,
          sixth6e,
          sixth6and,
          sixth6a,
          sixth7,
          sixth7e,
          sixth7and,
          sixth7a,
          sixth8,
          sixth8e,
          sixth8and,
          sixth8a];
        this.twoMeasureArr=[this.firstStringArr, this.secondStringArr, this.thirdStringArr, this.fourthStringArr, this.fifthStringArr, this.sixthStringArr];
        this.section.content.push(this.twoMeasureArr);
        this.section.song = '';
        console.log(this.section.content);
}

saveSectionToSong() {
  var newSectionToAdd: Section = new Section(this.section.name, this.section.content, this.section.song);
  console.log(newSectionToAdd);
  this.newSectionSender.emit(newSectionToAdd);
}

startScrolling(){
  let _firstArr = [];
  let _secondArr = [];
  let _thirdArr = [];
  let _fourthArr = [];
  let _fifthArr = [];
  let _sixthArr = [];
    for (let i=0; i<this.section.content.length; i++) {
      _firstArr.concat(this.section.content[i][0]);
      _secondArr.concat(this.section.content[i][1]);
      _thirdArr.concat(this.section.content[i][2]);
      _fourthArr.concat(this.section.content[i][3]);
      _fifthArr.concat(this.section.content[i][4]);
      _sixthArr.concat(this.section.content[i][5]);
      console.log(_firstArr);
    }
    setInterval(function(){
      if(_firstArr.length>1){
        _firstArr.splice(0,1);
        _secondArr.splice(0,1);
        _thirdArr.splice(0,1);
        _fourthArr.splice(0,1);
        _fifthArr .splice(0,1);
        _sixthArr.splice(0,1);
        console.log(_firstArr[0]);
      }
    }, 250
    )
  }
}
// startScrolling(){
//     let _firstArr = this.firstStringArr;
//     let _secondArr = this.secondStringArr;
//     let _thirdArr = this.thirdStringArr;
//     let _fourthArr = this.fourthStringArr;
//     let _fifthArr = this.fifthStringArr;
//     let _sixthArr = this.sixthStringArr;
//     setInterval(function(){
//       if(_firstArr.length>1){
//         _firstArr.splice(0,1);
//         _secondArr.splice(0,1);
//         _thirdArr.splice(0,1);
//         _fourthArr.splice(0,1);
//         _fifthArr .splice(0,1);
//         _sixthArr.splice(0,1);
//         console.log(_firstArr[0]);
//       }
//     }, 250
//     )
//   }
// }
