import { TestBed } from '@angular/core/testing';

import { AnCabangpelaporGuard } from './an-cabangpelapor.guard';

describe('_Template Module Guards', () => {
    let anCabangpelaporGuard: AnCabangpelaporGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnCabangpelaporGuard],
        });
        anCabangpelaporGuard = TestBed.inject(AnCabangpelaporGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anCabangpelaporGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
