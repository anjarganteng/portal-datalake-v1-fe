/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnSetoranjaminanModule } from './an-setoranjaminan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anSetoranjaminanContainers from './containers';

/* Guards */
import * as anSetoranjaminanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anSetoranjaminanContainers.AnSetoranjaminanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anSetoranjaminanContainers.AnSetoranjaminanComponent,
        data: {
            title: 'Setoran Jaminan',
            breadcrumbs: [
                {
                    text: 'Setoran Jaminan',
                    link: '/ansetoranjaminan',
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
    imports: [AnSetoranjaminanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnSetoranjaminanRoutingModule {}
