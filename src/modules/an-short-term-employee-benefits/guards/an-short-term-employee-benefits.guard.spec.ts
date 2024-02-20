import { TestBed } from '@angular/core/testing';

import { AnShortTermEmployeeBenefitsGuard } from './an-short-term-employee-benefits.guard';

describe('_Template Module Guards', () => {
    let anShortTermEmployeeBenefitsGuard: AnShortTermEmployeeBenefitsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnShortTermEmployeeBenefitsGuard],
        });
        anShortTermEmployeeBenefitsGuard = TestBed.inject(AnShortTermEmployeeBenefitsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anShortTermEmployeeBenefitsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
