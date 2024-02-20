/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnFundingConcentrationInterbankModule } from './an-funding-concentration-interbank.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anFundingConcentrationInterbankContainers from './containers';

/* Guards */
import * as anFundingConcentrationInterbankGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anFundingConcentrationInterbankContainers.AnFundingConcentrationInterbankComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anFundingConcentrationInterbankContainers.AnFundingConcentrationInterbankComponent,
        data: {
            title: 'Funding Concentration Interbank',
            breadcrumbs: [
                {
                    text: 'Funding Concentration Interbank',
                    link: '/an-funding-concentration-interbank',
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
    imports: [AnFundingConcentrationInterbankModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnFundingConcentrationInterbankRoutingModule {}
