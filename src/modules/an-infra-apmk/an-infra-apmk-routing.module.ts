/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnInfraApmkModule } from './an-infra-apmk.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anInfraApmkContainers from './containers';

/* Guards */
import * as anInfraApmkGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anInfraApmkContainers.AnInfraApmkComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anInfraApmkContainers.AnInfraApmkComponent,
        data: {
            title: 'Infra APMK',
            breadcrumbs: [
                {
                    text: 'Infra APMK',
                    link: '/aninfraapmk',
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
    imports: [AnInfraApmkModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnInfraApmkRoutingModule {}
