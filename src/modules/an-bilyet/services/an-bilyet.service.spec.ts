import { TestBed } from '@angular/core/testing';

import { AnBilyetService } from './an-bilyet.service';

describe('AnBilyetService', () => {
    let anBilyetService: AnBilyetService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnBilyetService],
        });
        anBilyetService = TestBed.inject(AnBilyetService);
    });

    describe('getAnBilyet$', () => {
        it('should return Observable<AnBilyet>', () => {
            anBilyetService.getAnBilyet$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
