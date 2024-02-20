import { TestBed } from '@angular/core/testing';

import { AnShortTermEmployeeBenefitsService } from './an-short-term-employee-benefits.service';

describe('AnShortTermEmployeeBenefitsService', () => {
    let anShortTermEmployeeBenefitsService: AnShortTermEmployeeBenefitsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnShortTermEmployeeBenefitsService],
        });
        anShortTermEmployeeBenefitsService = TestBed.inject(AnShortTermEmployeeBenefitsService);
    });

    describe('getAnShortTermEmployeeBenefits$', () => {
        it('should return Observable<AnShortTermEmployeeBenefits>', () => {
            anShortTermEmployeeBenefitsService.getAnShortTermEmployeeBenefits$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
