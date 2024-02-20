import { TestBed } from '@angular/core/testing';

import { AnSummaryAdjustmentService } from './an-summary-adjustment.service';

describe('AnSummaryAdjustmentService', () => {
    let anSummaryAdjustmentService: AnSummaryAdjustmentService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnSummaryAdjustmentService],
        });
        anSummaryAdjustmentService = TestBed.inject(AnSummaryAdjustmentService);
    });

    describe('getAnSummaryAdjustment$', () => {
        it('should return Observable<AnSummaryAdjustment>', () => {
            anSummaryAdjustmentService.getAnSummaryAdjustment$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
