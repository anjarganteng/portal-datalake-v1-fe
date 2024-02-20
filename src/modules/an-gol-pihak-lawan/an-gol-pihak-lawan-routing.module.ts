/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnGolPihakLawanModule } from './an-gol-pihak-lawan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anGolPihakLawanContainers from './containers';

/* Guards */
import * as anGolPihakLawanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anGolPihakLawanContainers.AnGolPihakLawanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anGolPihakLawanContainers.AnGolPihakLawanComponent,
        data: {
            title: 'Gol Pihak Lawan',
            breadcrumbs: [
                {
                    text: 'Gol Pihak Lawan',
                    link: '/an-gol-pihak-lawan',
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
    imports: [AnGolPihakLawanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnGolPihakLawanRoutingModule {}
