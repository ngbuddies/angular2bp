import { NgModule }                 from '@angular/core';


import { supportComponent }       from './support.component';
import { supportRoutingModule }   from './support-routing.module';

@NgModule({
    imports: [
        supportRoutingModule,
    ],
    declarations: [ supportComponent ]
})
export class supportModule { }
