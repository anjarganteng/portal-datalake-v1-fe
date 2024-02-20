import { TestBed } from '@angular/core/testing';

import { AnIntercompanyTransactionKbankGuard } from './an-intercompany-transaction-kbank.guard';

describe('_Template Module Guards', () => {
    let anIntercompanyTransactionKbankGuard: AnIntercompanyTransactionKbankGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnIntercompanyTransactionKbankGuard],
        });
        anIntercompanyTransactionKbankGuard = TestBed.inject(AnIntercompanyTransactionKbankGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anIntercompanyTransactionKbankGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
