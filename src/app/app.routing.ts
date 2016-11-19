import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';

export const routes: Routes = [
    {
        // in case of blank path it will be redirected to dashboard url
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'home',
                loadChildren: 'app/home/home.module#HomeModule'
            },
            {
                path: 'blog',
                loadChildren: 'app/blog/blog.module#blogModule'
            },
            {
                path: 'contact',
                loadChildren: 'app/contact/contact.module#contactModule'
            },
            {
                path: 'support',
                loadChildren: 'app/support/support.module#supportModule'
            },
              {
                path: 'aboutus',
                loadChildren: 'app/about/about.module#aboutModule'
            },
            
        ]
    },
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
