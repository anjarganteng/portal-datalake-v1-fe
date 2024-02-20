import { TestBed } from '@angular/core/testing';

import { AnCabangpelaporService } from './an-cabangpelapor.service';

describe('AnCabangpelaporService', () => {
    let anCabangpelaporService: AnCabangpelaporService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnCabangpelaporService],
        });
        anCabangpelaporService = TestBed.inject(AnCabangpelaporService);
    });

    describe('getAnCabangpelapor$', () => {
        it('should return Observable<AnCabangpelapor>', () => {
            anCabangpelaporService.getAnCabangpelapor$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
