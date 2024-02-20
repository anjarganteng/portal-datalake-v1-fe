import { TestBed } from '@angular/core/testing';

import { AnPihakLawanService } from './an-pihak-lawan.service';

describe('AnPihakLawanService', () => {
    let anPihakLawanService: AnPihakLawanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPihakLawanService],
        });
        anPihakLawanService = TestBed.inject(AnPihakLawanService);
    });

    describe('getAnPihakLawan$', () => {
        it('should return Observable<AnPihakLawan>', () => {
            anPihakLawanService.getAnPihakLawan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
