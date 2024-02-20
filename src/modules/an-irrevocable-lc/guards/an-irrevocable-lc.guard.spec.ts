import { TestBed } from '@angular/core/testing';

import { AnIrrevocableLcGuard } from './an-irrevocable-lc.guard';

describe('_Template Module Guards', () => {
    let anIrrevocableLcGuard: AnIrrevocableLcGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnIrrevocableLcGuard],
        });
        anIrrevocableLcGuard = TestBed.inject(AnIrrevocableLcGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anIrrevocableLcGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
