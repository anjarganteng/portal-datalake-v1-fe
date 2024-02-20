/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnPengecualianKodeAgunanModule } from './an-pengecualian-kode-agunan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anPengecualianKodeAgunanContainers from './containers';

/* Guards */
import * as anPengecualianKodeAgunanGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anPengecualianKodeAgunanContainers.AnPengecualianKodeAgunanComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anPengecualianKodeAgunanContainers.AnPengecualianKodeAgunanComponent,
        data: {
            title: 'Pengecualian Kode Agunan',
            breadcrumbs: [
                {
                    text: 'Pengecualian Kode Agunan',
                    link: '/an-pengecualian-kode-agunan',
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
    imports: [AnPengecualianKodeAgunanModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnPengecualianKodeAgunanRoutingModule {}
