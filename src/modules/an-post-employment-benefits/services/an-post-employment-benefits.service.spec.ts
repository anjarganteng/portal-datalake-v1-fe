import { TestBed } from '@angular/core/testing';

import { AnPostEmploymentBenefitsService } from './an-post-employment-benefits.service';

describe('AnPostEmploymentBenefitsService', () => {
    let anPostEmploymentBenefitsService: AnPostEmploymentBenefitsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPostEmploymentBenefitsService],
        });
        anPostEmploymentBenefitsService = TestBed.inject(AnPostEmploymentBenefitsService);
    });

    describe('getAnPostEmploymentBenefits$', () => {
        it('should return Observable<AnPostEmploymentBenefits>', () => {
            anPostEmploymentBenefitsService.getAnPostEmploymentBenefits$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
