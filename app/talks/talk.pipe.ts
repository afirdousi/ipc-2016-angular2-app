import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'talkPipe'
})
export class TalkPipe {

    // Transform is the new "return function(value, args)" in Angular 1.x
    transform(value:any, args?:any):any {

        let minLength = args;
        return minLength?value.filter((talk:any) => {
            console.log("Comparing ",talk.length," > ", +minLength);
            return +talk.length > +minLength;
        }):value;
    }

}