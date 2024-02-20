import { TestBed } from '@angular/core/testing';

import { AnPtsService } from './an-pts.service';

describe('AnPtsService', () => {
    let anPtsService: AnPtsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPtsService],
        });
        anPtsService = TestBed.inject(AnPtsService);
    });

    describe('getAnPts$', () => {
        it('should return Observable<AnPts>', () => {
            anPtsService.getAnPts$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
