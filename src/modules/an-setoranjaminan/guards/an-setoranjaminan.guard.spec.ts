import { TestBed } from '@angular/core/testing';

import { AnSetoranjaminanGuard } from './an-setoranjaminan.guard';

describe('_Template Module Guards', () => {
    let anSetoranjaminanGuard: AnSetoranjaminanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnSetoranjaminanGuard],
        });
        anSetoranjaminanGuard = TestBed.inject(AnSetoranjaminanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anSetoranjaminanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
