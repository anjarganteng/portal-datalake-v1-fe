/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnSlikAgunanBaruModule } from './an-slik-agunan-baru.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anSlikAgunanBaruContainers from './containers';

/* Guards */
import * as anSlikAgunanBaruGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anSlikAgunanBaruContainers.AnSlikAgunanBaruComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anSlikAgunanBaruContainers.AnSlikAgunanBaruComponent,
        data: {
            title: 'Slik Agunan Baru',
            breadcrumbs: [
                {
                    text: 'Slik Agunan Baru',
                    link: '/an-slik-agunan-baru',
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
    imports: [AnSlikAgunanBaruModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnSlikAgunanBaruRoutingModule {}
