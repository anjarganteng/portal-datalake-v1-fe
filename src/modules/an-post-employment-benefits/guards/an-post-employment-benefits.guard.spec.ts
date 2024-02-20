import { TestBed } from '@angular/core/testing';

import { AnPostEmploymentBenefitsGuard } from './an-post-employment-benefits.guard';

describe('_Template Module Guards', () => {
    let anPostEmploymentBenefitsGuard: AnPostEmploymentBenefitsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPostEmploymentBenefitsGuard],
        });
        anPostEmploymentBenefitsGuard = TestBed.inject(AnPostEmploymentBenefitsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPostEmploymentBenefitsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
