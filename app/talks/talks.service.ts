import { Injectable } from "@angular/core";
import { Talk } from "./talks.model";

@Injectable()
export class TalksService {

    talks:Talk[];

    getTalks(){

        this.talks = [
            {"id":1,"length":45,"title":"Level Your Team Up","details":"As a tech lead, team lead or other senior-level member of a development team, you may at any time run into the problem where you want your team members to improve themselves or to get involved in community or other projects, but you have a hard time actually pushing your team members in the right direction. This talk will help you with practical tips and tricks and examples from the workfloor on how to get developers to push themselves to their limits and level up."},
            {"id":2,"length":18,"title":"PHP Craftmanship","details":"PHP gives developers a great deal of freedom to achieve their goals. In larger-scale projects, PHP also provides you with a lot of rope to hang yourself, and a short cycle of rapid development can quickly turn into years of maintenance nightmare. We will discuss five rules that every PHP developer and aspiring craftsman should know and stick to."},
            {"id":3,"length":60,"title":"Challenges for Agile Coaches","details":"Community of Practices for Scrum Master, Agile Coach team or the Flow-master network - when agile scales and lived in the company, it needs rituals for lateral executives. The exchange between them, the transfer of knowledge and reflection among themselves bring forward the agility. But when Agile coaches along in a team, creating new themes: the internal developments of their own team. "},
            {"id":4,"length":40,"title":"Angular 2 loves TypeScript!","details":"This partnership has been very productive and rewarding experience for us, and as part of this collaboration, we’re happy to announce that Angular 2 will now be built with TypeScript.  We’re looking forward to seeing what people will be able to do with these new tools and continuing to work with the Angular team to improve the experience for Angular developers."},
            {"id":5,"length":30,"title":"TypeScript : Angular's Friend","details":"JavaScript has become by the continuing boom of Web applications to one of the main languages ​​in recent years. More, more, more applications are developed with JavaScript and then need to be maintained thereafter also. Yet for JavaScript is all about? Our experience shows quite clearly: yes and no. JavaScript has its strengths, but also pronounced weaknesses that come just strong in the field of professional application developers and especially the maintenance for carrying. Typescript promises improvement here."},
            {"id":6,"length":15,"title":"Jenkins for PHP Developers","details":"Jenkins is an incredibly flexible application. In this session I will show you how our Jenkins infrastructure is set up and how we use Jenkins on a daily basis. You will learn about our favourite Jenkins plugins and how we use PHP tools like Composer, Phing, PHPUnit and others in our Jenkins jobs. Last not least I will give you some practical insights on how to use Jenkins and Satis to build your own internal Composer package repository."},
            {"id":7,"length":6,"title":"Angular 2 : You can sit with us","details":"Angular 2 now turning from a framework to platform!"},

        ];

        return this.talks;

    }

}
