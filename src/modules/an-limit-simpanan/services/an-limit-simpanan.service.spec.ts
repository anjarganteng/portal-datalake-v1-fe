import { TestBed } from '@angular/core/testing';

import { AnLimitSimpananService } from './an-limit-simpanan.service';

describe('AnLimitSimpananService', () => {
    let anLimitSimpananService: AnLimitSimpananService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnLimitSimpananService],
        });
        anLimitSimpananService = TestBed.inject(AnLimitSimpananService);
    });

    describe('getAnLimitSimpanan$', () => {
        it('should return Observable<AnLimitSimpanan>', () => {
            anLimitSimpananService.getAnLimitSimpanan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
