import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { aboutComponent }   from './about.component';

const routes: Routes = [
    {
        path: '',
        component: aboutComponent,
        data: {
            title: 'about'
        }
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class aboutRoutingModule {}
