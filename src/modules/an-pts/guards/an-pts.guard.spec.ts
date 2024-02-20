import { TestBed } from '@angular/core/testing';

import { AnPtsGuard } from './an-pts.guard';

describe('_Template Module Guards', () => {
    let anPtsGuard: AnPtsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPtsGuard],
        });
        anPtsGuard = TestBed.inject(AnPtsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPtsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
