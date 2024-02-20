/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnUploadfileModule } from './an-uploadfile.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anUploadfileContainers from './containers';

/* Guards */
import * as anUploadfileGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anUploadfileContainers.AnUploadfileComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anUploadfileContainers.AnUploadfileComponent,
        data: {
            title: 'Upload Antasena',
            breadcrumbs: [
                {
                    text: 'Upload Files',
                    link: '/anuploadfiles',
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
    imports: [AnUploadfileModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnUploadfileRoutingModule {}
