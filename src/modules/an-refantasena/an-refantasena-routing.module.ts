/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnRefantasenaModule } from './an-refantasena.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anRefantasenaContainers from './containers';

/* Guards */
import * as anRefantasenaGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anRefantasenaContainers.AnRefantasenaComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anRefantasenaContainers.AnRefantasenaComponent,
        data: {
            title: 'Referensi Antasenan',
            breadcrumbs: [
                {
                    text: 'Referensi Antasena',
                    link: '/anrefantasena',
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
    imports: [AnRefantasenaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnRefantasenaRoutingModule {}
