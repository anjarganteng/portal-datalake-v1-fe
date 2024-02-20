import { TestBed } from '@angular/core/testing';

import { AnRatesbsService } from './an-ratesbs.service';

describe('AnRatesbsService', () => {
    let anRatesbsService: AnRatesbsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnRatesbsService],
        });
        anRatesbsService = TestBed.inject(AnRatesbsService);
    });

    describe('getAnRatesbs$', () => {
        it('should return Observable<AnRatesbs>', () => {
            anRatesbsService.getAnRatesbs$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
