/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnProsesDwSukubungaModule } from './an-proses-dw-sukubunga.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anProsesDwSukubungaContainers from './containers';

/* Guards */
import * as anProsesDwSukubungaGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anProsesDwSukubungaContainers.AnProsesDwSukubungaComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anProsesDwSukubungaContainers.AnProsesDwSukubungaComponent,
        data: {
            title: 'Ingest Suku Bunga Harian',
            breadcrumbs: [
                {
                    text: 'Ingest Suku Bunga Harian',
                    link: '/an-proses-dw-sukubunga',
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
    imports: [AnProsesDwSukubungaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnProsesDwSukubungaRoutingModule {}
