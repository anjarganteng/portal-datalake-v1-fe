import { TestBed } from '@angular/core/testing';

import { AnLimitSimpananGuard } from './an-limit-simpanan.guard';

describe('_Template Module Guards', () => {
    let anLimitSimpananGuard: AnLimitSimpananGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnLimitSimpananGuard],
        });
        anLimitSimpananGuard = TestBed.inject(AnLimitSimpananGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anLimitSimpananGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
