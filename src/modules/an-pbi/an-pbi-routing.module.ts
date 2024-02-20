/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPbiModule } from './an-pbi.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPbiContainers from './containers';

/* Guards */
import * as anPbiGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPbiContainers.AnPbiComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPbiContainers.AnPbiComponent,
        data: {
            title: 'Penempatan Bank Indonesia',
            breadcrumbs: [
                {
                    text: 'PBI',
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
    imports: [AnPbiModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPbiRoutingModule {}
