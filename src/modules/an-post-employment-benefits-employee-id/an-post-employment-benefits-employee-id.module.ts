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
import * as anPostEmploymentBenefitsEmployeeIdComponents from './components';

/* Containers */
import * as anPostEmploymentBenefitsEmployeeIdContainers from './containers';

/* Guards */
import * as anPostEmploymentBenefitsEmployeeIdGuards from './guards';

/* Services */
import * as anPostEmploymentBenefitsEmployeeIdServices from './services';

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
		...anPostEmploymentBenefitsEmployeeIdServices.services, ...anPostEmploymentBenefitsEmployeeIdGuards.guards],
    declarations: [...anPostEmploymentBenefitsEmployeeIdContainers.containers, ...anPostEmploymentBenefitsEmployeeIdComponents.components],
    exports: [...anPostEmploymentBenefitsEmployeeIdContainers.containers, ...anPostEmploymentBenefitsEmployeeIdComponents.components],
})
export class AnPostEmploymentBenefitsEmployeeIdModule {}
