/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnLoanModule } from './an-loan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anLoanContainers from './containers';

/* Guards */
import * as anLoanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anLoanContainers.AnLoanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anLoanContainers.AnLoanComponent,
        data: {
            title: 'Loan',
            breadcrumbs: [
                {
                    text: 'Loan',
                    link: '/an-loan',
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
    imports: [AnLoanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnLoanRoutingModule {}
