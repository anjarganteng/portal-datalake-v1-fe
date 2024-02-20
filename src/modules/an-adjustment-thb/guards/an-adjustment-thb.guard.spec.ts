import { TestBed } from '@angular/core/testing';

import { AnAdjustmentThbGuard } from './an-adjustment-thb.guard';

describe('_Template Module Guards', () => {
    let anAdjustmentThbGuard: AnAdjustmentThbGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnAdjustmentThbGuard],
        });
        anAdjustmentThbGuard = TestBed.inject(AnAdjustmentThbGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anAdjustmentThbGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
