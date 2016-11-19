import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule, ActivatedRoute  }         from '@angular/router';

import { blogComponent }   from './blog.component';

const routes: Routes = [
    {
        path: '',
        component: blogComponent,
        data: {
            title: 'Blog'
        }
    },
    {
        path: ':id',
        component: blogComponent,
        data: {
            title: 'Blog'
        }
    },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class blogRoutingModule  {
    
    
}
