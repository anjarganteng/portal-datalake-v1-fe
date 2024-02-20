import { TestBed } from '@angular/core/testing';

import { AnPostEmploymentBenefitsEmployeeIdService } from './an-post-employment-benefits-employee-id.service';

describe('AnPostEmploymentBenefitsEmployeeIdService', () => {
    let anPostEmploymentBenefitsEmployeeIdService: AnPostEmploymentBenefitsEmployeeIdService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPostEmploymentBenefitsEmployeeIdService],
        });
        anPostEmploymentBenefitsEmployeeIdService = TestBed.inject(AnPostEmploymentBenefitsEmployeeIdService);
    });

    describe('getAnPostEmploymentBenefitsEmployeeId$', () => {
        it('should return Observable<AnPostEmploymentBenefitsEmployeeId>', () => {
            anPostEmploymentBenefitsEmployeeIdService.getAnPostEmploymentBenefitsEmployeeId$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
