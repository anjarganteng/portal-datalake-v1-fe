import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnApplicationPermissionInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnApplicationPermissionService {
    constructor() {}

    getAnApplicationPermission$(): Observable<{}> {
        return of({});
    }
}
