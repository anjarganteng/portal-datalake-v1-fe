import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnSetoranjaminanInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnSetoranjaminanService {
    constructor() {}

    getAnSetoranjaminan$(): Observable<{}> {
        return of({});
    }
}
