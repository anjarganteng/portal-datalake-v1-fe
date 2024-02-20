import { TestBed } from '@angular/core/testing';

import { AnKasvalasService } from './an-kasvalas.service';

describe('AnKasvalasService', () => {
    let anKasvalasService: AnKasvalasService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnKasvalasService],
        });
        anKasvalasService = TestBed.inject(AnKasvalasService);
    });

    describe('getAnKasvalas$', () => {
        it('should return Observable<AnKasvalas>', () => {
            anKasvalasService.getAnKasvalas$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
