import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnOtherBenefitsPaidInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnOtherBenefitsPaidService {
    constructor() {}

    getAnOtherBenefitsPaid$(): Observable<{}> {
        return of({});
    }
}
