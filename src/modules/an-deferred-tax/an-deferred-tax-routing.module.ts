/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnDeferredTaxModule } from './an-deferred-tax.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anDeferredTaxContainers from './containers';

/* Guards */
import * as anDeferredTaxGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anDeferredTaxContainers.AnDeferredTaxComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anDeferredTaxContainers.AnDeferredTaxComponent,
        data: {
            title: 'Deferred Tax',
            breadcrumbs: [
                {
                    text: 'Deferred Tax',
                    link: '/an-deferred-tax',
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
    imports: [AnDeferredTaxModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnDeferredTaxRoutingModule {}
