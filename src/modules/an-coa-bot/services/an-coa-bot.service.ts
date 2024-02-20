import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnCoaBotInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnCoaBotService {
    constructor() {}

    getAnCoaBot$(): Observable<{}> {
        return of({});
    }
}
