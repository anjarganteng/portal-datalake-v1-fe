/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnRatesbkModule } from './an-ratesbk.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anRatesbkContainers from './containers';

/* Guards */
import * as anRatesbkGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anRatesbkContainers.AnRatesbkComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anRatesbkContainers.AnRatesbkComponent,
        data: {
            title: 'Counter Rate Sbk',
            breadcrumbs: [
                {
                    text: 'Counter Rate Sbk',
                    link: '/anratesbk',
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
    imports: [AnRatesbkModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnRatesbkRoutingModule {}
