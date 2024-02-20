import { TestBed } from '@angular/core/testing';

import { AnProsesUmumGuard } from './an-proses-umum.guard';

describe('_Template Module Guards', () => {
    let anProsesUmumGuard: AnProsesUmumGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnProsesUmumGuard],
        });
        anProsesUmumGuard = TestBed.inject(AnProsesUmumGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anProsesUmumGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
