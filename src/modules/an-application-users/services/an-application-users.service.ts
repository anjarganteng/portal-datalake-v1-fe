import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnApplicationUsersInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnApplicationUsersService {
    constructor() {}

    getAnApplicationUsers$(): Observable<{}> {
        return of({});
    }
}
