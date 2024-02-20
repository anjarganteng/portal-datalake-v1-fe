/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnKursModule } from './an-kurs.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anKursContainers from './containers';

/* Guards */
import * as anKursGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anKursContainers.AnKursComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anKursContainers.AnKursComponent,
        data: {
            title: 'Kurs',
            breadcrumbs: [
                {
                    text: 'Kurs',
                    link: '/ankurs',
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
    imports: [AnKursModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnKursRoutingModule {}
