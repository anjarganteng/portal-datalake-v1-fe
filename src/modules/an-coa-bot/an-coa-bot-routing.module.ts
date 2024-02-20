/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnCoaBotModule } from './an-coa-bot.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anCoaBotContainers from './containers';

/* Guards */
import * as anCoaBotGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anCoaBotContainers.AnCoaBotComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anCoaBotContainers.AnCoaBotComponent,
        data: {
            title: 'COA',
            breadcrumbs: [
                {
                    text: 'COA',
                    link: '/an-coa-bot',
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
    imports: [AnCoaBotModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnCoaBotRoutingModule {}
