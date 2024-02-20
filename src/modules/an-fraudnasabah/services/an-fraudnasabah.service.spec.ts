import { TestBed } from '@angular/core/testing';

import { AnFraudnasabahService } from './an-fraudnasabah.service';

describe('AnFraudnasabahService', () => {
    let anFraudnasabahService: AnFraudnasabahService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnFraudnasabahService],
        });
        anFraudnasabahService = TestBed.inject(AnFraudnasabahService);
    });

    describe('getAnFraudnasabah$', () => {
        it('should return Observable<AnFraudnasabah>', () => {
            anFraudnasabahService.getAnFraudnasabah$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
