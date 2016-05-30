import { Component , OnInit } from "@angular/core";
import { Talk } from "./talks.model";
import { TalkComponent } from "./talk.component";
import { TalksService } from "./talks.service";
import {TalkPipe} from "./talk.pipe";



@Component({
  selector: 'ipc-talks',
  providers: [TalksService],
  viewProviders: [],
  templateUrl: './app/talks/talks.component.html',
  styleUrls: ['./app/talks/talks.component.css'],
  directives: [TalkComponent],
  pipes: [TalkPipe]
})
export class TalksComponent implements OnInit{

  talks:Talk[];
  selectedTalk:Talk;
  bestTalk:Talk;
  sliderValue:number = 0;

  constructor(public talkService:TalksService){
  }

  ngOnInit(){

    //this.talks = this.talkService.getTalks();
    this.talks = this.talkService.getTalks();

  }

  selectTalk(talk:Talk){
    this.selectedTalk = talk;
    console.log(this.selectedTalk);
  }

  onMarkBest(talk:Talk){
    console.log("On Mark Best", event);
    this.bestTalk = talk;
  }

}
