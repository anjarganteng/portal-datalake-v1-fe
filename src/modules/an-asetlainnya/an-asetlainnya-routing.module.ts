/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnAsetlainnyaModule } from './an-asetlainnya.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anAsetlainnyaContainers from './containers';

/* Guards */
import * as anAsetlainnyaGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anAsetlainnyaContainers.AnAsetlainnyaComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anAsetlainnyaContainers.AnAsetlainnyaComponent,
        data: {
            title: 'Aset Lainnya',
            breadcrumbs: [
                {
                    text: 'Aset Lainnya',
                    link: '/anasetlainnya',
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
    imports: [AnAsetlainnyaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnAsetlainnyaRoutingModule {}
