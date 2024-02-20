import { TestBed } from '@angular/core/testing';

import { AnAsetantarkantorGuard } from './an-asetantarkantor.guard';

describe('_Template Module Guards', () => {
    let anAsetantarkantorGuard: AnAsetantarkantorGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnAsetantarkantorGuard],
        });
        anAsetantarkantorGuard = TestBed.inject(AnAsetantarkantorGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anAsetantarkantorGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
