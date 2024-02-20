import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { I18nService } from 'app/shared/i18n/i18n.service';

declare var $: any;

@Injectable()
export class NotificationService {
    msgBox: HTMLElement | undefined;

    private TITLE_ERROR = 'error.title';
    private TITLE_SUCCESS = 'success.title';
    private TITLE_WARNING = 'warning.title';
    private TITLE_INFORMATION = 'info.title';

    private MSG_ERROR = 'error.message';
    private MSG_SUCCESS = 'success.message';
    private MSG_WARNING = 'warning.message';
    private MSG_INFORMATION = 'info.message';

    constructor() {}
}
