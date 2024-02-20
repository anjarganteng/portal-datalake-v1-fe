import { TestBed } from '@angular/core/testing';

import { AnCashbackService } from './an-cashback.service';

describe('AnCashbackService', () => {
    let anCashbackService: AnCashbackService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnCashbackService],
        });
        anCashbackService = TestBed.inject(AnCashbackService);
    });

    describe('getAnCashback$', () => {
        it('should return Observable<AnCashback>', () => {
            anCashbackService.getAnCashback$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
