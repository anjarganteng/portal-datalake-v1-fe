/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnSecuritiesModule } from './an-securities.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anSecuritiesContainers from './containers';

/* Guards */
import * as anSecuritiesGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anSecuritiesContainers.AnSecuritiesComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anSecuritiesContainers.AnSecuritiesComponent,
        data: {
            title: 'Securities',
            breadcrumbs: [
                {
                    text: 'Securities',
                    link: '/an-securities',
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
    imports: [AnSecuritiesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnSecuritiesRoutingModule {}
