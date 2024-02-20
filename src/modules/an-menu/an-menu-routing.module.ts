/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnMenuModule } from './an-menu.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anMenuContainers from './containers';

/* Guards */
import * as anMenuGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anMenuContainers.AnMenuComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anMenuContainers.AnMenuComponent,
        data: {
            title: 'Menu',
            breadcrumbs: [
                {
                    text: 'Menu',
                    link: '/an-menu',
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
    imports: [AnMenuModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnMenuRoutingModule {}
