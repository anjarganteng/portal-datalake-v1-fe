import { TestBed } from '@angular/core/testing';

import { AnKasvalasGuard } from './an-kasvalas.guard';

describe('_Template Module Guards', () => {
    let anKasvalasGuard: AnKasvalasGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnKasvalasGuard],
        });
        anKasvalasGuard = TestBed.inject(AnKasvalasGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anKasvalasGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
