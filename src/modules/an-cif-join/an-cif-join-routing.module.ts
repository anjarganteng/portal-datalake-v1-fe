/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnCifJoinModule } from './an-cif-join.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anCifJoinContainers from './containers';

/* Guards */
import * as anCifJoinGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anCifJoinContainers.AnCifJoinComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anCifJoinContainers.AnCifJoinComponent,
        data: {
            title: 'CIF JOIN',
            breadcrumbs: [
                {
                    text: 'CIF JOIN',
                    link: '/an-cif-join',
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
    imports: [AnCifJoinModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnCifJoinRoutingModule {}
