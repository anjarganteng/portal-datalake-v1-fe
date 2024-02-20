import { TestBed } from '@angular/core/testing';

import { AnPihakLawanGuard } from './an-pihak-lawan.guard';

describe('_Template Module Guards', () => {
    let anPihakLawanGuard: AnPihakLawanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPihakLawanGuard],
        });
        anPihakLawanGuard = TestBed.inject(AnPihakLawanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPihakLawanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
