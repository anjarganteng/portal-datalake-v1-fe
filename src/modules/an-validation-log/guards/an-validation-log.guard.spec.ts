import { TestBed } from '@angular/core/testing';

import { AnValidationLogGuard } from './an-validation-log.guard';

describe('_Template Module Guards', () => {
    let anValidationLogGuard: AnValidationLogGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnValidationLogGuard],
        });
        anValidationLogGuard = TestBed.inject(AnValidationLogGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anValidationLogGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
