/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnLiablainnyaModule } from './an-liablainnya.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anLiablainnyaContainers from './containers';

/* Guards */
import * as anLiablainnyaGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anLiablainnyaContainers.AnLiablainnyaComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anLiablainnyaContainers.AnLiablainnyaComponent,
        data: {
            title: 'Liabilitas Lainnya',
            breadcrumbs: [
                {
                    text: 'Liabilitas Lainnya',
                    link: '/anliablainnya',
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
    imports: [AnLiablainnyaModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnLiablainnyaRoutingModule {}
