import { TestBed } from '@angular/core/testing';

import { AnRekdikecualikanService } from './an-rekdikecualikan.service';

describe('AnRekdikecualikanService', () => {
    let anRekdikecualikanService: AnRekdikecualikanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnRekdikecualikanService],
        });
        anRekdikecualikanService = TestBed.inject(AnRekdikecualikanService);
    });

    describe('getAnRekdikecualikan$', () => {
        it('should return Observable<AnRekdikecualikan>', () => {
            anRekdikecualikanService.getAnRekdikecualikan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
