/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnOtherBenefitsPaidModule } from './an-other-benefits-paid.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anOtherBenefitsPaidContainers from './containers';

/* Guards */
import * as anOtherBenefitsPaidGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anOtherBenefitsPaidContainers.AnOtherBenefitsPaidComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anOtherBenefitsPaidContainers.AnOtherBenefitsPaidComponent,
        data: {
            title: 'Other Benefits Paid',
            breadcrumbs: [
                {
                    text: 'Other Benefits Paid',
                    link: '/an-other-benefits-paid',
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
    imports: [AnOtherBenefitsPaidModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnOtherBenefitsPaidRoutingModule {}
