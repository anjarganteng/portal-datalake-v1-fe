/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPemegangkuasaModule } from './an-pemegangkuasa.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPemegangkuasaContainers from './containers';

/* Guards */
import * as anPemegangkuasaGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPemegangkuasaContainers.AnPemegangkuasaComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPemegangkuasaContainers.AnPemegangkuasaComponent,
        data: {
            title: 'Pemegang Kuasa',
            breadcrumbs: [
                {
                    text: 'Pemegang Kuasa',
                    link: '/an-pemegangkuasa',
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
    imports: [AnPemegangkuasaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPemegangkuasaRoutingModule {}
