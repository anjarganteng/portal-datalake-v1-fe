/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnProsesUmumModule } from './an-proses-umum.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anProsesUmumContainers from './containers';

/* Guards */
import * as anProsesUmumGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anProsesUmumContainers.AnProsesUmumComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anProsesUmumContainers.AnProsesUmumComponent,
        data: {
            title: 'Ingest GL Manual',
            breadcrumbs: [
                {
                    text: 'Proses Umum',
                    link: '/an-proses-umum',
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
    imports: [AnProsesUmumModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnProsesUmumRoutingModule {}
