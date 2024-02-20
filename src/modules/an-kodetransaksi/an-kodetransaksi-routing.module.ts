/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnKodetransaksiModule } from './an-kodetransaksi.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anKodetransaksiContainers from './containers';

/* Guards */
import * as anKodetransaksiGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anKodetransaksiContainers.AnKodetransaksiComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anKodetransaksiContainers.AnKodetransaksiComponent,
        data: {
            title: 'Kode Transaksi Lainnya',
            breadcrumbs: [
                {
                    text: 'Kode Transaksi Lainnya',
                    link: '/ankodetransaksi',
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
    imports: [AnKodetransaksiModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnKodetransaksiRoutingModule {}
