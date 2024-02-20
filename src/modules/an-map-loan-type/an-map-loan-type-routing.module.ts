/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnMapLoanTypeModule } from './an-map-loan-type.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anMapLoanTypeContainers from './containers';

/* Guards */
import * as anMapLoanTypeGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anMapLoanTypeContainers.AnMapLoanTypeComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anMapLoanTypeContainers.AnMapLoanTypeComponent,
        data: {
            title: 'Map Loan Type',
            breadcrumbs: [
                {
                    text: 'Map Loan Type',
                    link: '/an-map-loan-type',
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
    imports: [AnMapLoanTypeModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnMapLoanTypeRoutingModule {}
