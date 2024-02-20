import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnWeselInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnWeselService {
    constructor() {}

    getAnWesel$(): Observable<{}> {
        return of({});
    }
}
