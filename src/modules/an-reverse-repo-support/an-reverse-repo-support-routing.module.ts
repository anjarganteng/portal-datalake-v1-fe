/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnReverseRepoSupportModule } from './an-reverse-repo-support.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anReverseRepoSupportContainers from './containers';

/* Guards */
import * as anReverseRepoSupportGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anReverseRepoSupportContainers.AnReverseRepoSupportComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anReverseRepoSupportContainers.AnReverseRepoSupportComponent,
        data: {
            title: 'Reverse Repo Support',
            breadcrumbs: [
                {
                    text: 'Reverse Repo Support',
                    link: '/an-reverse-repo-support',
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
    imports: [AnReverseRepoSupportModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnReverseRepoSupportRoutingModule {}
