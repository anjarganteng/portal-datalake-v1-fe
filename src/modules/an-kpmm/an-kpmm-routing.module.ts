/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnKpmmModule } from './an-kpmm.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anKpmmContainers from './containers';

/* Guards */
import * as anKpmmGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anKpmmContainers.AnKpmmComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anKpmmContainers.AnKpmmComponent,
        data: {
            title: 'KPMM',
            breadcrumbs: [
                {
                    text: 'KPMM',
                    link: '/an-kpmm',
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
    imports: [AnKpmmModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnKpmmRoutingModule {}
