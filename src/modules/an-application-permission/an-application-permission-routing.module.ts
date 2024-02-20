/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnApplicationPermissionModule } from './an-application-permission.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anApplicationPermissionContainers from './containers';

/* Guards */
import * as anApplicationPermissionGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anApplicationPermissionContainers.AnApplicationPermissionComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anApplicationPermissionContainers.AnApplicationPermissionComponent,
        data: {
            title: 'Application Permission',
            breadcrumbs: [
                {
                    text: 'Application Permission',
                    link: '/an-application-permission',
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
    imports: [AnApplicationPermissionModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnApplicationPermissionRoutingModule {}
