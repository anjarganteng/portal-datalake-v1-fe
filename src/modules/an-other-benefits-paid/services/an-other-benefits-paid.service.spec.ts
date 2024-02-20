import { TestBed } from '@angular/core/testing';

import { AnOtherBenefitsPaidService } from './an-other-benefits-paid.service';

describe('AnOtherBenefitsPaidService', () => {
    let anOtherBenefitsPaidService: AnOtherBenefitsPaidService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnOtherBenefitsPaidService],
        });
        anOtherBenefitsPaidService = TestBed.inject(AnOtherBenefitsPaidService);
    });

    describe('getAnOtherBenefitsPaid$', () => {
        it('should return Observable<AnOtherBenefitsPaid>', () => {
            anOtherBenefitsPaidService.getAnOtherBenefitsPaid$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
