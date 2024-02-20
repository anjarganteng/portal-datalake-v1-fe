import { TestBed } from '@angular/core/testing';

import { AnPostEmploymentBenefitsEmployeeIdGuard } from './an-post-employment-benefits-employee-id.guard';

describe('_Template Module Guards', () => {
    let anPostEmploymentBenefitsEmployeeIdGuard: AnPostEmploymentBenefitsEmployeeIdGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPostEmploymentBenefitsEmployeeIdGuard],
        });
        anPostEmploymentBenefitsEmployeeIdGuard = TestBed.inject(AnPostEmploymentBenefitsEmployeeIdGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPostEmploymentBenefitsEmployeeIdGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
