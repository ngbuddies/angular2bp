import { NgModule }                 from '@angular/core';


import { contactComponent }       from './contact.component';
import { HomeRoutingModule }   from './contact-routing.module';
import { HttpModule } from "@angular/http";
import { FormsModule }   from '@angular/forms';
@NgModule({
    imports: [  HttpModule,HomeRoutingModule,FormsModule ],
    declarations: [ contactComponent ]
})
export class contactModule { }
