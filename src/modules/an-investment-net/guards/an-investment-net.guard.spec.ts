import { TestBed } from '@angular/core/testing';

import { AnInvestmentNetGuard } from './an-investment-net.guard';

describe('_Template Module Guards', () => {
    let anInvestmentNetGuard: AnInvestmentNetGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnInvestmentNetGuard],
        });
        anInvestmentNetGuard = TestBed.inject(AnInvestmentNetGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anInvestmentNetGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
