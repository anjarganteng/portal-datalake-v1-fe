/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnLiabantarkantorModule } from './an-liabantarkantor.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anLiabantarkantorContainers from './containers';

/* Guards */
import * as anLiabantarkantorGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anLiabantarkantorContainers.AnLiabantarkantorComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anLiabantarkantorContainers.AnLiabantarkantorComponent,
        data: {
            title: 'Liabilitas Antar Kantor',
            breadcrumbs: [
                {
                    text: 'Liabilitas Antar Kantor',
                    link: '/anliabantarkantor',
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
    imports: [AnLiabantarkantorModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnLiabantarkantorRoutingModule {}
