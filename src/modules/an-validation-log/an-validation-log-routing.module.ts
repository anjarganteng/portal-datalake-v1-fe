/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnValidationLogModule } from './an-validation-log.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anValidationLogContainers from './containers';

/* Guards */
import * as anValidationLogGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anValidationLogContainers.AnValidationLogComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anValidationLogContainers.AnValidationLogComponent,
        data: {
            title: 'Validation Master Cif',
            breadcrumbs: [
                {
                    text: 'Validation Master Cif',
                    link: '/an-validation-log',
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
    imports: [AnValidationLogModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnValidationLogRoutingModule {}
