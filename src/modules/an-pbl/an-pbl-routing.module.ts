/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPblModule } from './an-pbl.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPblContainers from './containers';

/* Guards */
import * as anPblGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPblContainers.AnPblComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPblContainers.AnPblComponent,
        data: {
            title: 'Penempatan Bank Lain',
            breadcrumbs: [
                {
                    text: 'PBL',
                    link: '/anpbi',
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
    imports: [AnPblModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPblRoutingModule {}
