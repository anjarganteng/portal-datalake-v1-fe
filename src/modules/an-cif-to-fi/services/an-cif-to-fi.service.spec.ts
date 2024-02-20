import { TestBed } from '@angular/core/testing';

import { AnCifToFiService } from './an-cif-to-fi.service';

describe('AnCifToFiService', () => {
    let anCifToFiService: AnCifToFiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnCifToFiService],
        });
        anCifToFiService = TestBed.inject(AnCifToFiService);
    });

    describe('getAnCifToFi$', () => {
        it('should return Observable<AnCifToFi>', () => {
            anCifToFiService.getAnCifToFi$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
