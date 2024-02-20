import { TestBed } from '@angular/core/testing';

import { AnIntercompanyTransactionGroupService } from './an-intercompany-transaction-group.service';

describe('AnIntercompanyTransactionGroupService', () => {
    let anIntercompanyTransactionGroupService: AnIntercompanyTransactionGroupService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnIntercompanyTransactionGroupService],
        });
        anIntercompanyTransactionGroupService = TestBed.inject(AnIntercompanyTransactionGroupService);
    });

    describe('getAnIntercompanyTransactionGroup$', () => {
        it('should return Observable<AnIntercompanyTransactionGroup>', () => {
            anIntercompanyTransactionGroupService.getAnIntercompanyTransactionGroup$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
