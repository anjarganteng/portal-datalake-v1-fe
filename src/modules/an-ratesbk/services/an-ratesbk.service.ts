import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnRatesbkInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnRatesbkService {
    constructor() {}

    getAnRatesbk$(): Observable<{}> {
        return of({});
    }
}
