/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnBankGuaranteeModule } from './an-bank-guarantee.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anBankGuaranteeContainers from './containers';

/* Guards */
import * as anBankGuaranteeGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anBankGuaranteeContainers.AnBankGuaranteeComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anBankGuaranteeContainers.AnBankGuaranteeComponent,
        data: {
            title: 'Bank Guarantee',
            breadcrumbs: [
                {
                    text: 'Bank Guarantee',
                    link: '/an-bank-guarantee',
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
    imports: [AnBankGuaranteeModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnBankGuaranteeRoutingModule {}
