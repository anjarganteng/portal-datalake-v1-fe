import { TestBed } from '@angular/core/testing';

import { AnFundingConcentrationInterbankGuard } from './an-funding-concentration-interbank.guard';

describe('_Template Module Guards', () => {
    let anFundingConcentrationInterbankGuard: AnFundingConcentrationInterbankGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnFundingConcentrationInterbankGuard],
        });
        anFundingConcentrationInterbankGuard = TestBed.inject(AnFundingConcentrationInterbankGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anFundingConcentrationInterbankGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
