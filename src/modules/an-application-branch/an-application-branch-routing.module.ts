/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnApplicationBranchModule } from './an-application-branch.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anApplicationBranchContainers from './containers';

/* Guards */
import * as anApplicationBranchGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anApplicationBranchContainers.AnApplicationBranchComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anApplicationBranchContainers.AnApplicationBranchComponent,
        data: {
            title: 'Branch',
            breadcrumbs: [
                {
                    text: 'Application Branch',
                    link: '/an-application-branch',
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
    imports: [AnApplicationBranchModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnApplicationBranchRoutingModule {}
