import { Component } from '@angular/core';
//Google Analytics
import { Router, Event, NavigationEnd,  RouterModule, ActivatedRoute  } from '@angular/router';
import { Title }                from '@angular/platform-browser';

declare let ga: Function;
@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>',
    //css
    styles: [`
   .wrapper{
      width: 60%;
      margin: 60px auto;
    }
  `],
})
export class AppComponent {
    constructor(public router: Router, private titleService: Title,private route:ActivatedRoute) {
        this.router.events.subscribe(
            (event: Event) => {
                if (event instanceof NavigationEnd) {
                    console.log("state Change",event);
                    this.setTitle(event.url);
                    ga('send', 'pageview', event.urlAfterRedirects);
                }
            });
                  console.log(this.router);
        console.log(this.route);
        console.log(this.route.params);
        console.log(this.route.snapshot.params['id']);
    }
    public setTitle(newTitle: string) {
        let title=[];
        let titleText:string;
        title=newTitle.split('/');
        console.log(title);
        if(title.length>0){
            titleText=title[1].replace('/','').toUpperCase() + " | " + "NgBuddies";
        }
        else{
            titleText="HOME | NgBuddies";
        }
        this.titleService.setTitle(titleText);
    }
}
