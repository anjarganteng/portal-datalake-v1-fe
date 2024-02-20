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
import * as anRekdikecualikanComponents from './components';

/* Containers */
import * as anRekdikecualikanContainers from './containers';

/* Guards */
import * as anRekdikecualikanGuards from './guards';

/* Services */
import * as anRekdikecualikanServices from './services';

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
		...anRekdikecualikanServices.services, ...anRekdikecualikanGuards.guards],
    declarations: [...anRekdikecualikanContainers.containers, ...anRekdikecualikanComponents.components],
    exports: [...anRekdikecualikanContainers.containers, ...anRekdikecualikanComponents.components],
})
export class AnRekdikecualikanModule {}
