/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnWeselModule } from './an-wesel.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anWeselContainers from './containers';

/* Guards */
import * as anWeselGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anWeselContainers.AnWeselComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anWeselContainers.AnWeselComponent,
        data: {
            title: 'Wesel',
            breadcrumbs: [
                {
                    text: 'Wesel',
                    link: '/an-wesel',
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
    imports: [AnWeselModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnWeselRoutingModule {}
