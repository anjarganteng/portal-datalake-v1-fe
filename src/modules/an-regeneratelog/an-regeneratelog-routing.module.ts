/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnRegeneratelogModule } from './an-regeneratelog.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anRegeneratelogContainers from './containers';

/* Guards */
import * as anRegeneratelogGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anRegeneratelogContainers.AnRegeneratelogComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anRegeneratelogContainers.AnRegeneratelogComponent,
        data: {
            title: 'Regenerate Log',
            breadcrumbs: [
                {
                    text: 'Regenerate Log',
                    link: '/anregeneratelog',
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
    imports: [AnRegeneratelogModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnRegeneratelogRoutingModule {}
