import { TestBed } from '@angular/core/testing';

import { AnLoanService } from './an-loan.service';

describe('AnLoanService', () => {
    let anLoanService: AnLoanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnLoanService],
        });
        anLoanService = TestBed.inject(AnLoanService);
    });

    describe('getAnLoan$', () => {
        it('should return Observable<AnLoan>', () => {
            anLoanService.getAnLoan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
