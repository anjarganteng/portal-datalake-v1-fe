/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnLimitSimpananModule } from './an-limit-simpanan.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anLimitSimpananContainers from './containers';

/* Guards */
import * as anLimitSimpananGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anLimitSimpananContainers.AnLimitSimpananComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anLimitSimpananContainers.AnLimitSimpananComponent,
        data: {
            title: 'Limit Simpanan',
            breadcrumbs: [
                {
                    text: 'Limit Simpanan',
                    link: '/an-limit-simpanan',
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
    imports: [AnLimitSimpananModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnLimitSimpananRoutingModule {}
