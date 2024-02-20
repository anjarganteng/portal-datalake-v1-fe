/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnRekdikecualikanModule } from './an-rekdikecualikan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anRekdikecualikanContainers from './containers';

/* Guards */
import * as anRekdikecualikanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anRekdikecualikanContainers.AnRekdikecualikanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anRekdikecualikanContainers.AnRekdikecualikanComponent,
        data: {
            title: 'Rekening Dikecualikan',
            breadcrumbs: [
                {
                    text: 'Rekening Dikecualikan',
                    link: '/anrekdikecualikan',
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
    imports: [AnRekdikecualikanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnRekdikecualikanRoutingModule {}
