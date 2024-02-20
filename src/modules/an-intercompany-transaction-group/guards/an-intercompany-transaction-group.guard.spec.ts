import { TestBed } from '@angular/core/testing';

import { AnIntercompanyTransactionGroupGuard } from './an-intercompany-transaction-group.guard';

describe('_Template Module Guards', () => {
    let anIntercompanyTransactionGroupGuard: AnIntercompanyTransactionGroupGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnIntercompanyTransactionGroupGuard],
        });
        anIntercompanyTransactionGroupGuard = TestBed.inject(AnIntercompanyTransactionGroupGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anIntercompanyTransactionGroupGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
