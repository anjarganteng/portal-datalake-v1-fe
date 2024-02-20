/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPtsModule } from './an-pts.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPtsContainers from './containers';

/* Guards */
import * as anPtsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPtsContainers.AnPtsComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPtsContainers.AnPtsComponent,
        data: {
            title: 'PTS',
            breadcrumbs: [
                {
                    text: 'PTS',
                    link: '/an-pts',
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
    imports: [AnPtsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPtsRoutingModule {}
