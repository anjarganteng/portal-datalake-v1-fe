/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPpaModule } from './an-ppa.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPpaContainers from './containers';

/* Guards */
import * as anPpaGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPpaContainers.AnPpaComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPpaContainers.AnPpaComponent,
        data: {
            title: 'Penyisihan Penghapusan Aktiva',
            breadcrumbs: [
                {
                    text: 'PPA',
                    link: '/an-ppa',
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
    imports: [AnPpaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPpaRoutingModule {}
