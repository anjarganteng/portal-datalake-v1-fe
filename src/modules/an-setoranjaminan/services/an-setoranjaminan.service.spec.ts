import { TestBed } from '@angular/core/testing';

import { AnSetoranjaminanService } from './an-setoranjaminan.service';

describe('AnSetoranjaminanService', () => {
    let anSetoranjaminanService: AnSetoranjaminanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnSetoranjaminanService],
        });
        anSetoranjaminanService = TestBed.inject(AnSetoranjaminanService);
    });

    describe('getAnSetoranjaminan$', () => {
        it('should return Observable<AnSetoranjaminan>', () => {
            anSetoranjaminanService.getAnSetoranjaminan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
