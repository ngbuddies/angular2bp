import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule, ActivatedRoute  }         from '@angular/router';

import { blogComponent }   from './blog.component';

const routes: Routes = [
    {
        path: '',
        component: blogComponent,
        data: {
            title: 'blog'
        }
    },
    {
        path: ':id',
        component: blogComponent,
        data: {
            title: 'blog'
        }
    },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class blogRoutingModule  {
    
    
}
