/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnNasabahjoinModule } from './an-nasabahjoin.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anNasabahjoinContainers from './containers';

/* Guards */
import * as anNasabahjoinGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anNasabahjoinContainers.AnNasabahjoinComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anNasabahjoinContainers.AnNasabahjoinComponent,
        data: {
            title: 'Nasabahjoin',
            breadcrumbs: [
                {
                    text: 'Nasabahjoin',
                    link: '/an-nasabahjoin',
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
    imports: [AnNasabahjoinModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnNasabahjoinRoutingModule {}
