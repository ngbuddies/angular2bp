import { Component } from '@angular/core';
//Google Analytics
import {Router, Event, NavigationEnd} from '@angular/router';
declare let ga:Function;
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
 constructor(public router:Router) {
        this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd) {
                  console.log("state Change");
                    ga('send', 'pageview', event.urlAfterRedirects);
                }
            });
    }
}
