import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { supportComponent }   from './support.component';

const routes: Routes = [
    {
        path: '',
        component: supportComponent,
        data: {
            title: 'Support'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class supportRoutingModule {}
