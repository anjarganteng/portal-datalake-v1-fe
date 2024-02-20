/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnApplicationUsersModule } from './an-application-users.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anApplicationUsersContainers from './containers';

/* Guards */
import * as anApplicationUsersGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anApplicationUsersContainers.AnApplicationUsersComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anApplicationUsersContainers.AnApplicationUsersComponent,
        data: {
            title: 'Users',
            breadcrumbs: [
                {
                    text: 'Application Users',
                    link: '/an-application-users',
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
    imports: [AnApplicationUsersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnApplicationUsersRoutingModule {}
