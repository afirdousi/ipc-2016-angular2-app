import {Component} from '@angular/core';
import {TalksComponent} from "./talks/talks.component";

@Component({
    selector: 'my-app',
    template:
        `<h1> {{ title }} </h1>
           <ipc-talks></ipc-talks>
        `,
    directives:[TalksComponent]
})
export class AppComponent {

    title:string = "IPC Berlin 2016";

}
