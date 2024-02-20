import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface <%= classify(name) %>Interface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class <%= classify(name) %>Service {
    constructor() {}

    get<%= classify(name) %>$(): Observable<{}> {
        return of({});
    }
}
