/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnParamAruskasModule } from './an-param-aruskas.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anParamAruskasContainers from './containers';

/* Guards */
import * as anParamAruskasGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anParamAruskasContainers.AnParamAruskasComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anParamAruskasContainers.AnParamAruskasComponent,
        data: {
            title: 'Parameter Arus Kas',
            breadcrumbs: [
                {
                    text: 'Param Arus Kas',
                    link: '/an-param-aruskas',
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
    imports: [AnParamAruskasModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnParamAruskasRoutingModule {}
