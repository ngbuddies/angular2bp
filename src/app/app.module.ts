import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { LocationStrategy,
         HashLocationStrategy }         from '@angular/common';

import { AppComponent }                 from './app.component';
import { Ng2BootstrapModule ,CarouselModule}           from 'ng2-bootstrap/ng2-bootstrap';

// Routing Module
import { AppRoutingModule }             from './app.routing';

//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';
import { headerComponent }          from './layouts/header.component';
import { footerComponent }          from './layouts/footer.component';
import { sidebarComponent }          from './layouts/sidebar.component';
//import our Carousel Component
//https://valor-software.com/ng2-bootstrap/#/carousel
 import { CarouselDemoComponent } from './slider/carousel.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        Ng2BootstrapModule,
        CarouselModule,
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        headerComponent,
        footerComponent,
        sidebarComponent,
        CarouselDemoComponent
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

