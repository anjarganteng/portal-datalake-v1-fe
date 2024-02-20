import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface AnUploadparameterInterface {
    data1: string;
    data2: string;
    data3: number;
}


@Injectable()
export class AnUploadparameterService {
    constructor() {}

    getAnUploadparameter$(): Observable<{}> {
        return of({});
    }
}
