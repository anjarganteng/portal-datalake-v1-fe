/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnFraudnasabahModule } from './an-fraudnasabah.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anFraudnasabahContainers from './containers';

/* Guards */
import * as anFraudnasabahGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anFraudnasabahContainers.AnFraudnasabahComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anFraudnasabahContainers.AnFraudnasabahComponent,
        data: {
            title: 'Fraud Nasabah',
            breadcrumbs: [
                {
                    text: 'Fraud Nasabah',
                    link: '/an-fraudnasabah',
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
    imports: [AnFraudnasabahModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnFraudnasabahRoutingModule {}
