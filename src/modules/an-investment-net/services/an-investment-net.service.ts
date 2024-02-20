import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnInvestmentNetInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnInvestmentNetService {
    constructor() {}

    getAnInvestmentNet$(): Observable<{}> {
        return of({});
    }
}
