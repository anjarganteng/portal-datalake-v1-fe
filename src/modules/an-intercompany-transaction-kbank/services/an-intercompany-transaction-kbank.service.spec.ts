import { TestBed } from '@angular/core/testing';

import { AnIntercompanyTransactionKbankService } from './an-intercompany-transaction-kbank.service';

describe('AnIntercompanyTransactionKbankService', () => {
    let anIntercompanyTransactionKbankService: AnIntercompanyTransactionKbankService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnIntercompanyTransactionKbankService],
        });
        anIntercompanyTransactionKbankService = TestBed.inject(AnIntercompanyTransactionKbankService);
    });

    describe('getAnIntercompanyTransactionKbank$', () => {
        it('should return Observable<AnIntercompanyTransactionKbank>', () => {
            anIntercompanyTransactionKbankService.getAnIntercompanyTransactionKbank$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
