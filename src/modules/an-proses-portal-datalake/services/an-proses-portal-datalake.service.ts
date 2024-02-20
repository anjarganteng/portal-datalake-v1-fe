import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnProsesPortalDatalakeInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnProsesPortalDatalakeService {
    constructor() {}

    getAnProsesPortalDatalake$(): Observable<{}> {
        return of({});
    }
}
