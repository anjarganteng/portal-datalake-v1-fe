import { TestBed } from '@angular/core/testing';

import { AnMapLoanTypeGuard } from './an-map-loan-type.guard';

describe('_Template Module Guards', () => {
    let anMapLoanTypeGuard: AnMapLoanTypeGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnMapLoanTypeGuard],
        });
        anMapLoanTypeGuard = TestBed.inject(AnMapLoanTypeGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anMapLoanTypeGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
