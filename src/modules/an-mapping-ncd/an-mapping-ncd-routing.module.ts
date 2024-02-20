/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnMappingNcdModule } from './an-mapping-ncd.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anMappingNcdContainers from './containers';

/* Guards */
import * as anMappingNcdGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anMappingNcdContainers.AnMappingNcdComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anMappingNcdContainers.AnMappingNcdComponent,
        data: {
            title: 'Mapping NCD',
            breadcrumbs: [
                {
                    text: 'Mapping NCD',
                    link: '/anmappingncd',
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
    imports: [AnMappingNcdModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnMappingNcdRoutingModule {}
