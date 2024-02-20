import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnCifdikecualikanInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnCifdikecualikanService {
    constructor() {}

    getAnCifdikecualikan$(): Observable<{}> {
        return of({});
    }
}
