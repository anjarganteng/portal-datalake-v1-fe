/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnCashbackModule } from './an-cashback.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anCashbackContainers from './containers';

/* Guards */
import * as anCashbackGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anCashbackContainers.AnCashbackComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anCashbackContainers.AnCashbackComponent,
        data: {
            title: 'Cashback',
            breadcrumbs: [
                {
                    text: 'Cashback',
                    link: '/an-cashback',
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
    imports: [AnCashbackModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnCashbackRoutingModule {}
