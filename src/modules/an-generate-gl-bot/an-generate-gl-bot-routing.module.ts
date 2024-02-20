/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AnGenerateGlBotModule } from './an-generate-gl-bot.module';
import { SBRouteData } from '@modules/navigation/models';
/* Containers */
import * as anGenerateGlBotContainers from './containers';

/* Guards */
import * as anGenerateGlBotGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: anGenerateGlBotContainers.AnGenerateGlBotComponent,
    // },
	    {
        path: '',
        canActivate: [],
        component: anGenerateGlBotContainers.AnGenerateGlBotComponent,
        data: {
            title: 'Generate GL BOT Manual',
            breadcrumbs: [
                {
                    text: 'Generate GL BOT Manual',
                    link: '/an-generate-gl-bot',
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
    imports: [AnGenerateGlBotModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AnGenerateGlBotRoutingModule {}
