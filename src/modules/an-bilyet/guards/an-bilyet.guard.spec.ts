import { TestBed } from '@angular/core/testing';

import { AnBilyetGuard } from './an-bilyet.guard';

describe('_Template Module Guards', () => {
    let anBilyetGuard: AnBilyetGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnBilyetGuard],
        });
        anBilyetGuard = TestBed.inject(AnBilyetGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anBilyetGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
