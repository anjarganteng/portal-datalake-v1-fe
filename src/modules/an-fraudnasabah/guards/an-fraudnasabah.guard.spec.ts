import { TestBed } from '@angular/core/testing';

import { AnFraudnasabahGuard } from './an-fraudnasabah.guard';

describe('_Template Module Guards', () => {
    let anFraudnasabahGuard: AnFraudnasabahGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnFraudnasabahGuard],
        });
        anFraudnasabahGuard = TestBed.inject(AnFraudnasabahGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anFraudnasabahGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
