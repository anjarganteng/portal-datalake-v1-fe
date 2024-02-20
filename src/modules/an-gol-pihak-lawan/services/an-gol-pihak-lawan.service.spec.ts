import { TestBed } from '@angular/core/testing';

import { AnGolPihakLawanService } from './an-gol-pihak-lawan.service';

describe('AnGolPihakLawanService', () => {
    let anGolPihakLawanService: AnGolPihakLawanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnGolPihakLawanService],
        });
        anGolPihakLawanService = TestBed.inject(AnGolPihakLawanService);
    });

    describe('getAnGolPihakLawan$', () => {
        it('should return Observable<AnGolPihakLawan>', () => {
            anGolPihakLawanService.getAnGolPihakLawan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
