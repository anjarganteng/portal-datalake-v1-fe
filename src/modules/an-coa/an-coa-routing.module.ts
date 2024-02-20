/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnCoaModule } from './an-coa.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anCoaContainers from './containers';

/* Guards */
import * as anCoaGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anCoaContainers.AnCoaComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anCoaContainers.AnCoaComponent,
        data: {
            title: 'COA Parent',
            breadcrumbs: [
                {
                    text: 'COA Parent',
                    link: '/an-coa',
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
    imports: [AnCoaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnCoaRoutingModule {}
