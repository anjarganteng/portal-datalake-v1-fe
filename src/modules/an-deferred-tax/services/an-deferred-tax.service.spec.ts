import { TestBed } from '@angular/core/testing';

import { AnDeferredTaxService } from './an-deferred-tax.service';

describe('AnDeferredTaxService', () => {
    let anDeferredTaxService: AnDeferredTaxService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnDeferredTaxService],
        });
        anDeferredTaxService = TestBed.inject(AnDeferredTaxService);
    });

    describe('getAnDeferredTax$', () => {
        it('should return Observable<AnDeferredTax>', () => {
            anDeferredTaxService.getAnDeferredTax$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
