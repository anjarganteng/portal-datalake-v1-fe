/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnAtbModule } from './an-atb.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anAtbContainers from './containers';

/* Guards */
import * as anAtbGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anAtbContainers.AnAtbComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anAtbContainers.AnAtbComponent,
        data: {
            title: 'ATB',
            breadcrumbs: [
                {
                    text: 'ATB',
                    link: '/anatb',
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
    imports: [AnAtbModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnAtbRoutingModule {}
