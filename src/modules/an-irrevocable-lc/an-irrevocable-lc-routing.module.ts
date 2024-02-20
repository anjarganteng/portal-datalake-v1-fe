/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnIrrevocableLcModule } from './an-irrevocable-lc.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anIrrevocableLcContainers from './containers';

/* Guards */
import * as anIrrevocableLcGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anIrrevocableLcContainers.AnIrrevocableLcComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anIrrevocableLcContainers.AnIrrevocableLcComponent,
        data: {
            title: 'Irrevocable Lc',
            breadcrumbs: [
                {
                    text: 'Irrevocable Lc',
                    link: '/an-irrevocable-lc',
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
    imports: [AnIrrevocableLcModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnIrrevocableLcRoutingModule {}
