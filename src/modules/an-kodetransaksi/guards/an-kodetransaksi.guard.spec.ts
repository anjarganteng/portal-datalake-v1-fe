import { TestBed } from '@angular/core/testing';

import { AnKodetransaksiGuard } from './an-kodetransaksi.guard';

describe('_Template Module Guards', () => {
    let anKodetransaksiGuard: AnKodetransaksiGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnKodetransaksiGuard],
        });
        anKodetransaksiGuard = TestBed.inject(AnKodetransaksiGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anKodetransaksiGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
