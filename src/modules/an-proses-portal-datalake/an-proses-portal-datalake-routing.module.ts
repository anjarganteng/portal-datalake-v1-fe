/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnProsesPortalDatalakeModule } from './an-proses-portal-datalake.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anProsesPortalDatalakeContainers from './containers';

/* Guards */
import * as anProsesPortalDatalakeGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anProsesPortalDatalakeContainers.AnProsesPortalDatalakeComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anProsesPortalDatalakeContainers.AnProsesPortalDatalakeComponent,
        data: {
            title: 'Ingest Portal Datalake',
            breadcrumbs: [
                {
                    text: 'Ingest Portal Datalake',
                    link: '/an-proses-portal-datalake',
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
    imports: [AnProsesPortalDatalakeModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnProsesPortalDatalakeRoutingModule {}
