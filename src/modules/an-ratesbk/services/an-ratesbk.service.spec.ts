import { TestBed } from '@angular/core/testing';

import { AnRatesbkService } from './an-ratesbk.service';

describe('AnRatesbkService', () => {
    let anRatesbkService: AnRatesbkService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnRatesbkService],
        });
        anRatesbkService = TestBed.inject(AnRatesbkService);
    });

    describe('getAnRatesbk$', () => {
        it('should return Observable<AnRatesbk>', () => {
            anRatesbkService.getAnRatesbk$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
