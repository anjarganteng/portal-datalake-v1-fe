/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnApplicationRolesModule } from './an-application-roles.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anApplicationRolesContainers from './containers';

/* Guards */
import * as anApplicationRolesGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anApplicationRolesContainers.AnApplicationRolesComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anApplicationRolesContainers.AnApplicationRolesComponent,
        data: {
            title: 'Roles',
            breadcrumbs: [
                {
                    text: 'Application Roles',
                    link: '/an-application-roles',
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
    imports: [AnApplicationRolesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnApplicationRolesRoutingModule {}
