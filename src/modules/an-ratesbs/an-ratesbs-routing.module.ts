/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnRatesbsModule } from './an-ratesbs.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anRatesbsContainers from './containers';

/* Guards */
import * as anRatesbsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anRatesbsContainers.AnRatesbsComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anRatesbsContainers.AnRatesbsComponent,
        data: {
            title: 'Counter Rate Sbs',
            breadcrumbs: [
                {
                    text: 'Counter Rate Sbs',
                    link: '/anratesbs',
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
    imports: [AnRatesbsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnRatesbsRoutingModule {}
