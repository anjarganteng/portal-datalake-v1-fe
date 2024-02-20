/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnAsetantarkantorModule } from './an-asetantarkantor.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anAsetantarkantorContainers from './containers';

/* Guards */
import * as anAsetantarkantorGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anAsetantarkantorContainers.AnAsetantarkantorComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anAsetantarkantorContainers.AnAsetantarkantorComponent,
        data: {
            title: 'Aset Antar Kantor',
            breadcrumbs: [
                {
                    text: 'Aset Antar Kantor',
                    link: '/anasetkantor',
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
    imports: [AnAsetantarkantorModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnAsetantarkantorRoutingModule {}
