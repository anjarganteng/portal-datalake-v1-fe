/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

/* Modules */
import { AppHttpInterceptor } from '../app-common/services/AppHttpInterceptor';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { DataTablesModule } from 'angular-datatables';
import { MatDialogModule } from '@angular/material/dialog';

/* Components */
import * as anRefantasenaComponents from './components';

/* Containers */
import * as anRefantasenaContainers from './containers';

/* Guards */
import * as anRefantasenaGuards from './guards';

/* Services */
import * as anRefantasenaServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        DataTablesModule,
        HttpClientModule,
        DialogModule,
        MatDialogModule,
    ],
    providers: [
	 {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true,
        },
		...anRefantasenaServices.services, ...anRefantasenaGuards.guards],
    declarations: [...anRefantasenaContainers.containers, ...anRefantasenaComponents.components],
    exports: [...anRefantasenaContainers.containers, ...anRefantasenaComponents.components],
})
export class AnRefantasenaModule {}
