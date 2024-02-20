/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPostEmploymentBenefitsEmployeeIdModule } from './an-post-employment-benefits-employee-id.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPostEmploymentBenefitsEmployeeIdContainers from './containers';

/* Guards */
import * as anPostEmploymentBenefitsEmployeeIdGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPostEmploymentBenefitsEmployeeIdContainers.AnPostEmploymentBenefitsEmployeeIdComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPostEmploymentBenefitsEmployeeIdContainers.AnPostEmploymentBenefitsEmployeeIdComponent,
        data: {
            title: 'Post Employment Benefits Employee Id',
            breadcrumbs: [
                {
                    text: 'Post Employment Benefits Employee Id',
                    link: '/an-post-employment-benefits-employee-id',
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
    imports: [AnPostEmploymentBenefitsEmployeeIdModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPostEmploymentBenefitsEmployeeIdRoutingModule {}
