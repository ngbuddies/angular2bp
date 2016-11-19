import { NgModule }                 from '@angular/core';


import { aboutComponent }       from './about.component';
import { aboutRoutingModule }   from './about-routing.module';

@NgModule({
    imports: [
        aboutRoutingModule,
    ],
    declarations: [ aboutComponent ]
})
export class aboutModule { }
