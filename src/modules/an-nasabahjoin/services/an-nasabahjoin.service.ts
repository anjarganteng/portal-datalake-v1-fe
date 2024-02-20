import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnNasabahjoinInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnNasabahjoinService {
    constructor() {}

    getAnNasabahjoin$(): Observable<{}> {
        return of({});
    }
}
