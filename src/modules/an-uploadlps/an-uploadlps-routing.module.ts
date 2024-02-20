/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnUploadlpsModule } from './an-uploadlps.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anUploadlpsContainers from './containers';

/* Guards */
import * as anUploadlpsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anUploadlpsContainers.AnUploadlpsComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anUploadlpsContainers.AnUploadlpsComponent,
        data: {
            title: 'Upload Lps',
            breadcrumbs: [
                {
                    text: 'Upload Lps',
                    link: '/anuploadlps',
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
    imports: [AnUploadlpsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnUploadlpsRoutingModule {}
