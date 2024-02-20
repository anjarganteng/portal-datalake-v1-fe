import { TestBed } from '@angular/core/testing';

import { AnLiabantarkantorService } from './an-liabantarkantor.service';

describe('AnLiabantarkantorService', () => {
    let anLiabantarkantorService: AnLiabantarkantorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnLiabantarkantorService],
        });
        anLiabantarkantorService = TestBed.inject(AnLiabantarkantorService);
    });

    describe('getAnLiabantarkantor$', () => {
        it('should return Observable<AnLiabantarkantor>', () => {
            anLiabantarkantorService.getAnLiabantarkantor$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
