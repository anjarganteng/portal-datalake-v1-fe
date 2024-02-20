/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnCifToFiModule } from './an-cif-to-fi.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anCifToFiContainers from './containers';

/* Guards */
import * as anCifToFiGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anCifToFiContainers.AnCifToFiComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anCifToFiContainers.AnCifToFiComponent,
        data: {
            title: 'CIF to FI',
            breadcrumbs: [
                {
                    text: 'CIF to FI',
                    link: '/an-cif-to-fi',
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
    imports: [AnCifToFiModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnCifToFiRoutingModule {}
