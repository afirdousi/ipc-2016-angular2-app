import { Component,Input ,Output, EventEmitter } from "@angular/core";
import { Talk } from "./talks.model";

@Component({
  selector: 'ipc-talk',
  providers: [],
  viewProviders: [],
  templateUrl: './app/talks/talk.component.html',
  styleUrls: ['./app/talks/talk.component.css'],
  directives: [],
  pipes: []
})
export class TalkComponent {

    @Input() talk:Talk;
    @Output() mark:EventEmitter<any> = new EventEmitter();

    constructor(){

    }

    markBest(talk:Talk){
        this.mark.next(talk);
    }

}
