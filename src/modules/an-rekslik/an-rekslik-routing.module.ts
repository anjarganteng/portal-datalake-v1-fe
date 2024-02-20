/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnRekslikModule } from './an-rekslik.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anRekslikContainers from './containers';

/* Guards */
import * as anRekslikGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anRekslikContainers.AnRekslikComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anRekslikContainers.AnRekslikComponent,
        data: {
            title: 'Mapping Rek Baru Lama',
            breadcrumbs: [
                {
                    text: 'Mapping Rek Baru Lama',
                    link: '/anrekslik',
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
    imports: [AnRekslikModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnRekslikRoutingModule {}

