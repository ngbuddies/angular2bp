import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { contactComponent }   from './contact.component';

const routes: Routes = [
    {
        path: '',
        component: contactComponent,
        data: {
            title: 'Contact'
        }
    },
    {
        path: 'request',
        component: contactComponent,
        data: {
            title: 'Contact'
        }
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
