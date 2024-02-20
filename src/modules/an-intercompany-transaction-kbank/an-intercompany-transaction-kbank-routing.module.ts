/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnIntercompanyTransactionKbankModule } from './an-intercompany-transaction-kbank.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anIntercompanyTransactionKbankContainers from './containers';

/* Guards */
import * as anIntercompanyTransactionKbankGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anIntercompanyTransactionKbankContainers.AnIntercompanyTransactionKbankComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anIntercompanyTransactionKbankContainers.AnIntercompanyTransactionKbankComponent,
        data: {
            title: 'Intercompany Transaction Kbank',
            breadcrumbs: [
                {
                    text: 'Intercompany Transaction Kbank',
                    link: '/an-intercompany-transaction-kbank',
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
    imports: [AnIntercompanyTransactionKbankModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnIntercompanyTransactionKbankRoutingModule {}
