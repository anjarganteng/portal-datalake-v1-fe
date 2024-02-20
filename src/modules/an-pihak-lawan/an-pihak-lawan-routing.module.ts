/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPihakLawanModule } from './an-pihak-lawan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPihakLawanContainers from './containers';

/* Guards */
import * as anPihakLawanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPihakLawanContainers.AnPihakLawanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPihakLawanContainers.AnPihakLawanComponent,
        data: {
            title: 'Pihak Lawan',
            breadcrumbs: [
                {
                    text: 'Pihak Lawan',
                    link: '/an-pihak-lawan',
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
    imports: [AnPihakLawanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPihakLawanRoutingModule {}
