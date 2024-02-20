import { TestBed } from '@angular/core/testing';

import { AnLoanGuard } from './an-loan.guard';

describe('_Template Module Guards', () => {
    let anLoanGuard: AnLoanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnLoanGuard],
        });
        anLoanGuard = TestBed.inject(AnLoanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anLoanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
