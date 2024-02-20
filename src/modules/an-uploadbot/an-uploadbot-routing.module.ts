/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnUploadbotModule } from './an-uploadbot.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anUploadbotContainers from './containers';

/* Guards */
import * as anUploadbotGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anUploadbotContainers.AnUploadbotComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anUploadbotContainers.AnUploadbotComponent,
        data: {
            title: 'Upload BOT',
            breadcrumbs: [
                {
                    text: 'Upload BOT',
                    link: '/anuploadbot',
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
    imports: [AnUploadbotModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnUploadbotRoutingModule {}
