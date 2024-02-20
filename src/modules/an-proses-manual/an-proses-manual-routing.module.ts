/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnProsesManualModule } from './an-proses-manual.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anProsesManualContainers from './containers';

/* Guards */
import * as anProsesManualGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anProsesManualContainers.AnProsesManualComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anProsesManualContainers.AnProsesManualComponent,
        data: {
            title: 'Proses Manual',
            breadcrumbs: [
                {
                    text: 'Proses Manual',
                    link: '/an-proses-manual',
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
    imports: [AnProsesManualModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnProsesManualRoutingModule {}
