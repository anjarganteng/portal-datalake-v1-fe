import { TestBed } from '@angular/core/testing';

import { AnRatesbkGuard } from './an-ratesbk.guard';

describe('_Template Module Guards', () => {
    let anRatesbkGuard: AnRatesbkGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnRatesbkGuard],
        });
        anRatesbkGuard = TestBed.inject(AnRatesbkGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anRatesbkGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
