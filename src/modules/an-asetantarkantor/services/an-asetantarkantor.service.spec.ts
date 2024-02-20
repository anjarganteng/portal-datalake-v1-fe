import { TestBed } from '@angular/core/testing';

import { AnAsetantarkantorService } from './an-asetantarkantor.service';

describe('AnAsetantarkantorService', () => {
    let anAsetantarkantorService: AnAsetantarkantorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnAsetantarkantorService],
        });
        anAsetantarkantorService = TestBed.inject(AnAsetantarkantorService);
    });

    describe('getAnAsetantarkantor$', () => {
        it('should return Observable<AnAsetantarkantor>', () => {
            anAsetantarkantorService.getAnAsetantarkantor$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
