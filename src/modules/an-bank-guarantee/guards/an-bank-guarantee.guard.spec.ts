import { TestBed } from '@angular/core/testing';

import { AnBankGuaranteeGuard } from './an-bank-guarantee.guard';

describe('_Template Module Guards', () => {
    let anBankGuaranteeGuard: AnBankGuaranteeGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnBankGuaranteeGuard],
        });
        anBankGuaranteeGuard = TestBed.inject(AnBankGuaranteeGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anBankGuaranteeGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
