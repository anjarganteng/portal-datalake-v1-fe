/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnAdjustmentThbModule } from './an-adjustment-thb.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anAdjustmentThbContainers from './containers';

/* Guards */
import * as anAdjustmentThbGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anAdjustmentThbContainers.AnAdjustmentThbComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anAdjustmentThbContainers.AnAdjustmentThbComponent,
        data: {
            title: 'Adjustment THB',
            breadcrumbs: [
                {
                    text: 'Adjustment THB',
                    link: '/an-adjustment-thb',
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
    imports: [AnAdjustmentThbModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnAdjustmentThbRoutingModule {}
