/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnSummaryAdjustmentModule } from './an-summary-adjustment.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anSummaryAdjustmentContainers from './containers';

/* Guards */
import * as anSummaryAdjustmentGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anSummaryAdjustmentContainers.AnSummaryAdjustmentComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anSummaryAdjustmentContainers.AnSummaryAdjustmentComponent,
        data: {
            title: 'Summary Adjustment',
            breadcrumbs: [
                {
                    text: 'Summary Adjustment',
                    link: '/an-summary-adjustment',
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
    imports: [AnSummaryAdjustmentModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnSummaryAdjustmentRoutingModule {}
