import { TestBed } from '@angular/core/testing';

import { AnCashbackGuard } from './an-cashback.guard';

describe('_Template Module Guards', () => {
    let anCashbackGuard: AnCashbackGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnCashbackGuard],
        });
        anCashbackGuard = TestBed.inject(AnCashbackGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anCashbackGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
