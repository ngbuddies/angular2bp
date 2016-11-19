import { Component, OnInit } from '@angular/core';
//Google Analytics
import { Router, Event, NavigationEnd, RouterModule, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
export class AppComponent  {
  
    constructor(public router: Router, private titleService: Title, private route: ActivatedRoute) {
      this.setTitle();
    }
    public setTitle() {
        this.router.events.subscribe((event) => {
            let title:string;
            if (event instanceof NavigationEnd) {            
                ga('send', 'pageview', event.urlAfterRedirects);
                title = this.getDeepestTitle(this.router.routerState.snapshot.root) + " | NGBuddies";

            }
            this.titleService.setTitle(title);
        });

    }
    private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
        var title = routeSnapshot.data ? routeSnapshot.data['title'] : 'Home';
        if (routeSnapshot.firstChild) {
            title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }



}
