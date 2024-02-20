/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPrivilegesModule } from './an-privileges.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPrivilegesContainers from './containers';

/* Guards */
import * as anPrivilegesGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPrivilegesContainers.AnPrivilegesComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPrivilegesContainers.AnPrivilegesComponent,
        data: {
            title: 'Privileges',
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
    imports: [AnPrivilegesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPrivilegesRoutingModule {}
