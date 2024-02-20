import { TestBed } from '@angular/core/testing';

import { AnMapLoanTypeService } from './an-map-loan-type.service';

describe('AnMapLoanTypeService', () => {
    let anMapLoanTypeService: AnMapLoanTypeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnMapLoanTypeService],
        });
        anMapLoanTypeService = TestBed.inject(AnMapLoanTypeService);
    });

    describe('getAnMapLoanType$', () => {
        it('should return Observable<AnMapLoanType>', () => {
            anMapLoanTypeService.getAnMapLoanType$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
