import { TestBed } from '@angular/core/testing';

import { AnUploadparameterGuard } from './an-uploadparameter.guard';

describe('_Template Module Guards', () => {
    let anUploadparameterGuard: AnUploadparameterGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnUploadparameterGuard],
        });
        anUploadparameterGuard = TestBed.inject(AnUploadparameterGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anUploadparameterGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
