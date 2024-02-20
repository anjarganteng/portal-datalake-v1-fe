import { TestBed } from '@angular/core/testing';

import { AnValidationLogService } from './an-validation-log.service';

describe('AnValidationLogService', () => {
    let anValidationLogService: AnValidationLogService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnValidationLogService],
        });
        anValidationLogService = TestBed.inject(AnValidationLogService);
    });

    describe('getAnValidationLog$', () => {
        it('should return Observable<AnValidationLog>', () => {
            anValidationLogService.getAnValidationLog$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
