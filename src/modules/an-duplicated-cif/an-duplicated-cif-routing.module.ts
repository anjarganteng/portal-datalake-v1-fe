/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnDuplicatedCifModule } from './an-duplicated-cif.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anDuplicatedCifContainers from './containers';

/* Guards */
import * as anDuplicatedCifGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anDuplicatedCifContainers.AnDuplicatedCifComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anDuplicatedCifContainers.AnDuplicatedCifComponent,
        data: {
            title: 'Duplicated CIF',
            breadcrumbs: [
                {
                    text: 'Duplicated CIF',
                    link: '/an-duplicated-cif',
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
    imports: [AnDuplicatedCifModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnDuplicatedCifRoutingModule {}
