/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnSlikAgunanLamaModule } from './an-slik-agunan-lama.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anSlikAgunanLamaContainers from './containers';

/* Guards */
import * as anSlikAgunanLamaGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anSlikAgunanLamaContainers.AnSlikAgunanLamaComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anSlikAgunanLamaContainers.AnSlikAgunanLamaComponent,
        data: {
            title: 'Mapping Fasilitas Agunan',
            breadcrumbs: [
                {
                    text: 'Mapping Fasilitas Agunan',
                    link: '/an-slik-agunan-lama',
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
    imports: [AnSlikAgunanLamaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnSlikAgunanLamaRoutingModule {}

