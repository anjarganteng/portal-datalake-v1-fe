/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnGolpemilikModule } from './an-golpemilik.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anGolpemilikContainers from './containers';

/* Guards */
import * as anGolpemilikGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anGolpemilikContainers.AnGolpemilikComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anGolpemilikContainers.AnGolpemilikComponent,
        data: {
            title: 'Gol Pemilik Individu',
            breadcrumbs: [
                {
                    text: 'Gol Pemilik Individu',
                    link: '/angolpemilik',
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
    imports: [AnGolpemilikModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnGolpemilikRoutingModule {}
