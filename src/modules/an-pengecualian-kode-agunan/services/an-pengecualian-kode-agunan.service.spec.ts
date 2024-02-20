import { TestBed } from '@angular/core/testing';

import { AnPengecualianKodeAgunanService } from './an-pengecualian-kode-agunan.service';

describe('AnPengecualianKodeAgunanService', () => {
    let anPengecualianKodeAgunanService: AnPengecualianKodeAgunanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPengecualianKodeAgunanService],
        });
        anPengecualianKodeAgunanService = TestBed.inject(AnPengecualianKodeAgunanService);
    });

    describe('getAnPengecualianKodeAgunan$', () => {
        it('should return Observable<AnPengecualianKodeAgunan>', () => {
            anPengecualianKodeAgunanService.getAnPengecualianKodeAgunan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
