/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnMdrModule } from './an-mdr.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anMdrContainers from './containers';

/* Guards */
import * as anMdrGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anMdrContainers.AnMdrComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anMdrContainers.AnMdrComponent,
        data: {
            title: 'MDR',
            breadcrumbs: [
                {
                    text: 'MDR',
                    link: '/anmdr',
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
    imports: [AnMdrModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnMdrRoutingModule {}
