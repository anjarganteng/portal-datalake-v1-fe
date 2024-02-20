/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPihakterkaitModule } from './an-pihakterkait.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPihakterkaitContainers from './containers';

/* Guards */
import * as anPihakterkaitGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPihakterkaitContainers.AnPihakterkaitComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPihakterkaitContainers.AnPihakterkaitComponent,
        data: {
            title: 'Pihak Terkait',
            breadcrumbs: [
                {
                    text: 'Pihak Terkait',
                    link: '/anpihakterkait',
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
    imports: [AnPihakterkaitModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPihakterkaitRoutingModule {}
