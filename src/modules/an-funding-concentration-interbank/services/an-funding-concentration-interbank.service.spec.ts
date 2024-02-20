import { TestBed } from '@angular/core/testing';

import { AnFundingConcentrationInterbankService } from './an-funding-concentration-interbank.service';

describe('AnFundingConcentrationInterbankService', () => {
    let anFundingConcentrationInterbankService: AnFundingConcentrationInterbankService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnFundingConcentrationInterbankService],
        });
        anFundingConcentrationInterbankService = TestBed.inject(AnFundingConcentrationInterbankService);
    });

    describe('getAnFundingConcentrationInterbank$', () => {
        it('should return Observable<AnFundingConcentrationInterbank>', () => {
            anFundingConcentrationInterbankService.getAnFundingConcentrationInterbank$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
