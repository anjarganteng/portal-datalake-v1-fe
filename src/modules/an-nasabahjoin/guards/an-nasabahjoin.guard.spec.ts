import { TestBed } from '@angular/core/testing';

import { AnNasabahjoinGuard } from './an-nasabahjoin.guard';

describe('_Template Module Guards', () => {
    let anNasabahjoinGuard: AnNasabahjoinGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnNasabahjoinGuard],
        });
        anNasabahjoinGuard = TestBed.inject(AnNasabahjoinGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anNasabahjoinGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
