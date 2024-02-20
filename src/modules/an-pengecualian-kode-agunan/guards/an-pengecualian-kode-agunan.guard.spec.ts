import { TestBed } from '@angular/core/testing';

import { AnPengecualianKodeAgunanGuard } from './an-pengecualian-kode-agunan.guard';

describe('_Template Module Guards', () => {
    let anPengecualianKodeAgunanGuard: AnPengecualianKodeAgunanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPengecualianKodeAgunanGuard],
        });
        anPengecualianKodeAgunanGuard = TestBed.inject(AnPengecualianKodeAgunanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPengecualianKodeAgunanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
