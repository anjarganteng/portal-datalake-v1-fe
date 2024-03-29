/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { <%= classify(name) %>Module } from './<%= dasherize(name) %>.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as <%= camelize(name) %>Containers from './containers';

/* Guards */
import * as <%= camelize(name) %>Guards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: <%= camelize(name) %>Containers.<%= classify(name) %>Component,
    // },
	    {
        path: '',
        canActivate: [],
        component: <%= camelize(name) %>Containers.<%= classify(name) %>Component,
        data: {
            title: 'Module Name',
            breadcrumbs: [
                {
                    text: 'Module Name',
                    link: '/modulename',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [<%= classify(name) %>Module, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class <%= classify(name) %>RoutingModule {}
