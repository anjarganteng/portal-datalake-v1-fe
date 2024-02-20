import { TestBed } from '@angular/core/testing';

import { AnAdjustmentThbService } from './an-adjustment-thb.service';

describe('AnAdjustmentThbService', () => {
    let anAdjustmentThbService: AnAdjustmentThbService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnAdjustmentThbService],
        });
        anAdjustmentThbService = TestBed.inject(AnAdjustmentThbService);
    });

    describe('getAnAdjustmentThb$', () => {
        it('should return Observable<AnAdjustmentThb>', () => {
            anAdjustmentThbService.getAnAdjustmentThb$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
