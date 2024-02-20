/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnKodeagunanModule } from './an-kodeagunan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anKodeagunanContainers from './containers';

/* Guards */
import * as anKodeagunanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anKodeagunanContainers.AnKodeagunanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anKodeagunanContainers.AnKodeagunanComponent,
        data: {
            title: 'Mapping Kode Agunan',
            breadcrumbs: [
                {
                    text: 'Collateral Persentase',
                    link: '/ankodeagunan',
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
    imports: [AnKodeagunanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnKodeagunanRoutingModule {}
