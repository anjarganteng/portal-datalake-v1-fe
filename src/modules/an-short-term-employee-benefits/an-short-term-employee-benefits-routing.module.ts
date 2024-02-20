/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnShortTermEmployeeBenefitsModule } from './an-short-term-employee-benefits.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anShortTermEmployeeBenefitsContainers from './containers';

/* Guards */
import * as anShortTermEmployeeBenefitsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anShortTermEmployeeBenefitsContainers.AnShortTermEmployeeBenefitsComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anShortTermEmployeeBenefitsContainers.AnShortTermEmployeeBenefitsComponent,
        data: {
            title: 'Short Term Employee Benefits',
            breadcrumbs: [
                {
                    text: 'Short Term Employee Benefits',
                    link: '/an-short-term-employee-benefits',
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
    imports: [AnShortTermEmployeeBenefitsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnShortTermEmployeeBenefitsRoutingModule {}
