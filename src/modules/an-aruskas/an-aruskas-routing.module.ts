/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnAruskasModule } from './an-aruskas.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anAruskasContainers from './containers';

/* Guards */
import * as anAruskasGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anAruskasContainers.AnAruskasComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anAruskasContainers.AnAruskasComponent,
        data: {
            title: 'Proyeksi Arus Kas Rpp',
            breadcrumbs: [
                {
                    text: 'Arus Kas Rpp',
                    link: '/an-aruskas',
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
    imports: [AnAruskasModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnAruskasRoutingModule {}
