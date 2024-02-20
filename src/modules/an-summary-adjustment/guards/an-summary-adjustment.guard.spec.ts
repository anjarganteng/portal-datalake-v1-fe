import { TestBed } from '@angular/core/testing';

import { AnSummaryAdjustmentGuard } from './an-summary-adjustment.guard';

describe('_Template Module Guards', () => {
    let anSummaryAdjustmentGuard: AnSummaryAdjustmentGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnSummaryAdjustmentGuard],
        });
        anSummaryAdjustmentGuard = TestBed.inject(AnSummaryAdjustmentGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anSummaryAdjustmentGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
