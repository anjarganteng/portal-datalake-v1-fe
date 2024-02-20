/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnKasvalasModule } from './an-kasvalas.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anKasvalasContainers from './containers';

/* Guards */
import * as anKasvalasGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anKasvalasContainers.AnKasvalasComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anKasvalasContainers.AnKasvalasComponent,
        data: {
            title: 'Kode Transaksi Kas Valas',
            breadcrumbs: [
                {
                    text: 'Kas Valas',
                    link: '/ankasvalas',
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
    imports: [AnKasvalasModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnKasvalasRoutingModule {}
