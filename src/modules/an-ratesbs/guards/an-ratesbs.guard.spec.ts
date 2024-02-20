import { TestBed } from '@angular/core/testing';

import { AnRatesbsGuard } from './an-ratesbs.guard';

describe('_Template Module Guards', () => {
    let anRatesbsGuard: AnRatesbsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnRatesbsGuard],
        });
        anRatesbsGuard = TestBed.inject(AnRatesbsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anRatesbsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
