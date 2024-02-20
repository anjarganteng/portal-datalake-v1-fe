/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnCabangpelaporModule } from './an-cabangpelapor.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anCabangpelaporContainers from './containers';

/* Guards */
import * as anCabangpelaporGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anCabangpelaporContainers.AnCabangpelaporComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anCabangpelaporContainers.AnCabangpelaporComponent,
        data: {
            title: 'Cabang Pelapor',
            breadcrumbs: [
                {
                    text: 'Cabang Pelapor',
                    link: '/ancabangpelapor',
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
    imports: [AnCabangpelaporModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnCabangpelaporRoutingModule {}
