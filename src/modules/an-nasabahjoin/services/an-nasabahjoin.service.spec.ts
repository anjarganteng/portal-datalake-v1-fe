import { TestBed } from '@angular/core/testing';

import { AnNasabahjoinService } from './an-nasabahjoin.service';

describe('AnNasabahjoinService', () => {
    let anNasabahjoinService: AnNasabahjoinService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnNasabahjoinService],
        });
        anNasabahjoinService = TestBed.inject(AnNasabahjoinService);
    });

    describe('getAnNasabahjoin$', () => {
        it('should return Observable<AnNasabahjoin>', () => {
            anNasabahjoinService.getAnNasabahjoin$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
