import { TestBed } from '@angular/core/testing';

import { AnLiabantarkantorGuard } from './an-liabantarkantor.guard';

describe('_Template Module Guards', () => {
    let anLiabantarkantorGuard: AnLiabantarkantorGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnLiabantarkantorGuard],
        });
        anLiabantarkantorGuard = TestBed.inject(AnLiabantarkantorGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anLiabantarkantorGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
