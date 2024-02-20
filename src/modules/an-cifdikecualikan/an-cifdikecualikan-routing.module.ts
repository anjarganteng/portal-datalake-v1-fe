/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnCifdikecualikanModule } from './an-cifdikecualikan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anCifdikecualikanContainers from './containers';

/* Guards */
import * as anCifdikecualikanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anCifdikecualikanContainers.AnCifdikecualikanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anCifdikecualikanContainers.AnCifdikecualikanComponent,
        data: {
            title: 'Cif Dikecualikan',
            breadcrumbs: [
                {
                    text: 'Cif Dikecualikan',
                    link: '/ancifdikecualikan',
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
    imports: [AnCifdikecualikanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnCifdikecualikanRoutingModule {}
