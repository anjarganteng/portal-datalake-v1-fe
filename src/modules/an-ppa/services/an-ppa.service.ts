import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnPpaInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnPpaService {
    constructor() {}

    getAnPpa$(): Observable<{}> {
        return of({});
    }
}
