/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnUploadparameterModule } from './an-uploadparameter.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anUploadparameterContainers from './containers';

/* Guards */
import * as anUploadparameterGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anUploadparameterContainers.AnUploadparameterComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anUploadparameterContainers.AnUploadparameterComponent,
        data: {
            title: 'Upload Parameter',
            breadcrumbs: [
                {
                    text: 'Upload Parameter',
                    link: '/anuploadparameter',
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
    imports: [AnUploadparameterModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnUploadparameterRoutingModule {}
