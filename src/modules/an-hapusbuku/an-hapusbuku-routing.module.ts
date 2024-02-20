/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnHapusbukuModule } from './an-hapusbuku.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anHapusbukuContainers from './containers';

/* Guards */
import * as anHapusbukuGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anHapusbukuContainers.AnHapusbukuComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anHapusbukuContainers.AnHapusbukuComponent,
        data: {
            title: 'Hapus Buku',
            breadcrumbs: [
                {
                    text: 'Hapus Buku',
                    link: '/anhapusbuku',
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
    imports: [AnHapusbukuModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnHapusbukuRoutingModule {}
