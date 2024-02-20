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
import { LSelect2Module } from 'ngx-select2';
/* Components */
import * as <%= camelize(name) %>Components from './components';

/* Containers */
import * as <%= camelize(name) %>Containers from './containers';

/* Guards */
import * as <%= camelize(name) %>Guards from './guards';

/* Services */
import * as <%= camelize(name) %>Services from './services';

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
		LSelect2Module,
    ],
    providers: [
	 {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true,
        },
		...<%= camelize(name) %>Services.services, ...<%= camelize(name) %>Guards.guards],
    declarations: [...<%= camelize(name) %>Containers.containers, ...<%= camelize(name) %>Components.components],
    exports: [...<%= camelize(name) %>Containers.containers, ...<%= camelize(name) %>Components.components],
})
export class <%= classify(name) %>Module {}
