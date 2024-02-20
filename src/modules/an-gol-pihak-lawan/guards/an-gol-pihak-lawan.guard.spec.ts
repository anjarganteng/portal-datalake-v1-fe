import { TestBed } from '@angular/core/testing';

import { AnGolPihakLawanGuard } from './an-gol-pihak-lawan.guard';

describe('_Template Module Guards', () => {
    let anGolPihakLawanGuard: AnGolPihakLawanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnGolPihakLawanGuard],
        });
        anGolPihakLawanGuard = TestBed.inject(AnGolPihakLawanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anGolPihakLawanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
