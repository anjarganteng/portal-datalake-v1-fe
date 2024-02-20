/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnInvestmentNetModule } from './an-investment-net.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anInvestmentNetContainers from './containers';

/* Guards */
import * as anInvestmentNetGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anInvestmentNetContainers.AnInvestmentNetComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anInvestmentNetContainers.AnInvestmentNetComponent,
        data: {
            title: 'Investment Net',
            breadcrumbs: [
                {
                    text: 'Investment Net',
                    link: '/an-investment-net',
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
    imports: [AnInvestmentNetModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnInvestmentNetRoutingModule {}
