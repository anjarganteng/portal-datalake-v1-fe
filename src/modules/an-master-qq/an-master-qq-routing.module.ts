/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnMasterQqModule } from './an-master-qq.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anMasterQqContainers from './containers';

/* Guards */
import * as anMasterQqGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anMasterQqContainers.AnMasterQqComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anMasterQqContainers.AnMasterQqComponent,
        data: {
            title: 'Master QQ',
            breadcrumbs: [
                {
                    text: 'Master QQ',
                    link: '/an-master-qq',
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
    imports: [AnMasterQqModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnMasterQqRoutingModule {}
