import { TestBed } from '@angular/core/testing';

import { AnLpsService } from './an-lps.service';

describe('AnLpsService', () => {
    let anLpsService: AnLpsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnLpsService],
        });
        anLpsService = TestBed.inject(AnLpsService);
    });

    describe('getAnLps$', () => {
        it('should return Observable<AnLps>', () => {
            anLpsService.getAnLps$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
