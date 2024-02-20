import { TestBed } from '@angular/core/testing';

import { AnUploadparameterService } from './an-uploadparameter.service';

describe('AnUploadparameterService', () => {
    let anUploadparameterService: AnUploadparameterService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnUploadparameterService],
        });
        anUploadparameterService = TestBed.inject(AnUploadparameterService);
    });

    describe('getAnUploadparameter$', () => {
        it('should return Observable<AnUploadparameter>', () => {
            anUploadparameterService.getAnUploadparameter$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
