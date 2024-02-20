/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPostEmploymentBenefitsModule } from './an-post-employment-benefits.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPostEmploymentBenefitsContainers from './containers';

/* Guards */
import * as anPostEmploymentBenefitsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPostEmploymentBenefitsContainers.AnPostEmploymentBenefitsComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPostEmploymentBenefitsContainers.AnPostEmploymentBenefitsComponent,
        data: {
            title: 'Post Employment Benefits',
            breadcrumbs: [
                {
                    text: 'Post Employment Benefits',
                    link: '/an-post-employment-benefits',
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
    imports: [AnPostEmploymentBenefitsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPostEmploymentBenefitsRoutingModule {}
