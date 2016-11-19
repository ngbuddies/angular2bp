import { NgModule }                 from '@angular/core';


import { blogComponent }       from './blog.component';
import { blogRoutingModule }   from './blog-routing.module';

@NgModule({
    imports: [
        blogRoutingModule,
    ],
    declarations: [ blogComponent ]
})
export class blogModule { }
