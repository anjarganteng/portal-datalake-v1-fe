/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnAtmModule } from './an-atm.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anAtmContainers from './containers';

/* Guards */
import * as anAtmGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anAtmContainers.AnAtmComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anAtmContainers.AnAtmComponent,
        data: {
            title: 'User ID ATM',
            breadcrumbs: [
                {
                    text: 'ATM',
                    link: '/anatm',
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
    imports: [AnAtmModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnAtmRoutingModule {}
