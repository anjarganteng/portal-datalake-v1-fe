/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnLpsModule } from './an-lps.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anLpsContainers from './containers';

/* Guards */
import * as anLpsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anLpsContainers.AnLpsComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anLpsContainers.AnLpsComponent,
        data: {
            title: 'Bunga Lps',
            breadcrumbs: [
                {
                    text: 'Bunga Lps',
                    link: '/anlps',
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
    imports: [AnLpsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnLpsRoutingModule {}
