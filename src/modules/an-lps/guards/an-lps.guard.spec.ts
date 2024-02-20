import { TestBed } from '@angular/core/testing';

import { AnLpsGuard } from './an-lps.guard';

describe('_Template Module Guards', () => {
    let anLpsGuard: AnLpsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnLpsGuard],
        });
        anLpsGuard = TestBed.inject(AnLpsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anLpsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
