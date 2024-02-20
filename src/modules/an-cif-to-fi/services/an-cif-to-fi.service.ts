import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnCifToFiInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnCifToFiService {
    constructor() {}

    getAnCifToFi$(): Observable<{}> {
        return of({});
    }
}
