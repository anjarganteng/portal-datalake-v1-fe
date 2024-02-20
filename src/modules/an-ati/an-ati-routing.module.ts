/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnAtiModule } from './an-ati.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anAtiContainers from './containers';

/* Guards */
import * as anAtiGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anAtiContainers.AnAtiComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anAtiContainers.AnAtiComponent,
        data: {
            title: 'ATI',
            breadcrumbs: [
                {
                    text: 'ATI',
                    link: '/anati',
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
    imports: [AnAtiModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnAtiRoutingModule {}
