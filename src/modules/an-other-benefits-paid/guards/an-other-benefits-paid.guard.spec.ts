import { TestBed } from '@angular/core/testing';

import { AnOtherBenefitsPaidGuard } from './an-other-benefits-paid.guard';

describe('_Template Module Guards', () => {
    let anOtherBenefitsPaidGuard: AnOtherBenefitsPaidGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnOtherBenefitsPaidGuard],
        });
        anOtherBenefitsPaidGuard = TestBed.inject(AnOtherBenefitsPaidGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anOtherBenefitsPaidGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
