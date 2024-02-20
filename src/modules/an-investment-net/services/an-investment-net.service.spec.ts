import { TestBed } from '@angular/core/testing';

import { AnInvestmentNetService } from './an-investment-net.service';

describe('AnInvestmentNetService', () => {
    let anInvestmentNetService: AnInvestmentNetService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnInvestmentNetService],
        });
        anInvestmentNetService = TestBed.inject(AnInvestmentNetService);
    });

    describe('getAnInvestmentNet$', () => {
        it('should return Observable<AnInvestmentNet>', () => {
            anInvestmentNetService.getAnInvestmentNet$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
