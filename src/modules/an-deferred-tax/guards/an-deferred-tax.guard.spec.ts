import { TestBed } from '@angular/core/testing';

import { AnDeferredTaxGuard } from './an-deferred-tax.guard';

describe('_Template Module Guards', () => {
    let anDeferredTaxGuard: AnDeferredTaxGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnDeferredTaxGuard],
        });
        anDeferredTaxGuard = TestBed.inject(AnDeferredTaxGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anDeferredTaxGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
