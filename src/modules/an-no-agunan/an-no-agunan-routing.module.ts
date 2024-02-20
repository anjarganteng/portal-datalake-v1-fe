/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnNoAgunanModule } from './an-no-agunan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anNoAgunanContainers from './containers';

/* Guards */
import * as anNoAgunanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anNoAgunanContainers.AnNoAgunanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anNoAgunanContainers.AnNoAgunanComponent,
        data: {
            title: 'Mapping Agunan Baru Lama',
            breadcrumbs: [
                {
                    text: 'Mapping Agunan Baru Lama',
                    link: '/an-no-agunan',
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
    imports: [AnNoAgunanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnNoAgunanRoutingModule {}

