/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnBilyetModule } from './an-bilyet.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anBilyetContainers from './containers';

/* Guards */
import * as anBilyetGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anBilyetContainers.AnBilyetComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anBilyetContainers.AnBilyetComponent,
        data: {
            title: 'Bilyet',
            breadcrumbs: [
                {
                    text: 'Bilyet',
                    link: '/an-bilyet',
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
    imports: [AnBilyetModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnBilyetRoutingModule {}
