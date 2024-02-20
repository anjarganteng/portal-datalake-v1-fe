/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnAruskaskbuModule } from './an-aruskaskbu.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anAruskaskbuContainers from './containers';

/* Guards */
import * as anAruskaskbuGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anAruskaskbuContainers.AnAruskaskbuComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anAruskaskbuContainers.AnAruskaskbuComponent,
        data: {
            title: 'Proyeksi Arus Kas Kbu',
            breadcrumbs: [
                {
                    text: 'Arus Kas Kbu',
                    link: '/an-aruskaskbu',
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
    imports: [AnAruskaskbuModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnAruskaskbuRoutingModule {}
