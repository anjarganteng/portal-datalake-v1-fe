/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { WelcomePageModule } from './welcome-page.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as welcomePageContainers from './containers';

/* Guards */
import * as welcomePageGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: welcomePageContainers.WelcomePageComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: welcomePageContainers.WelcomePageComponent,
        data: {
            title: 'Welcome Page',
            breadcrumbs: [
                {
                    text: 'Welcome Page',
                    link: '/welcome-page',
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
    imports: [WelcomePageModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
