/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnIntercompanyTransactionGroupModule } from './an-intercompany-transaction-group.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anIntercompanyTransactionGroupContainers from './containers';

/* Guards */
import * as anIntercompanyTransactionGroupGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anIntercompanyTransactionGroupContainers.AnIntercompanyTransactionGroupComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anIntercompanyTransactionGroupContainers.AnIntercompanyTransactionGroupComponent,
        data: {
            title: 'Intercompany Transaction Kbank',
            breadcrumbs: [
                {
                    text: 'Intercompany Transaction Group',
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
    imports: [AnIntercompanyTransactionGroupModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnIntercompanyTransactionGroupRoutingModule {}
