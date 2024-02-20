/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnMasterCifModule } from './an-master-cif.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anMasterCifContainers from './containers';

/* Guards */
import * as anMasterCifGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anMasterCifContainers.AnMasterCifComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anMasterCifContainers.AnMasterCifComponent,
        data: {
            title: 'Master CIF',
            breadcrumbs: [
                {
                    text: 'Master CIF',
                    link: '/an-master-cif',
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
    imports: [AnMasterCifModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnMasterCifRoutingModule {}
