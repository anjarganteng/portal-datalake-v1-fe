import { TestBed } from '@angular/core/testing';

import { AnBankGuaranteeService } from './an-bank-guarantee.service';

describe('AnBankGuaranteeService', () => {
    let anBankGuaranteeService: AnBankGuaranteeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnBankGuaranteeService],
        });
        anBankGuaranteeService = TestBed.inject(AnBankGuaranteeService);
    });

    describe('getAnBankGuarantee$', () => {
        it('should return Observable<AnBankGuarantee>', () => {
            anBankGuaranteeService.getAnBankGuarantee$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
