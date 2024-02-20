import { TestBed } from '@angular/core/testing';

import { AnProsesManualService } from './an-proses-manual.service';

describe('AnProsesManualService', () => {
    let anProsesManualService: AnProsesManualService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnProsesManualService],
        });
        anProsesManualService = TestBed.inject(AnProsesManualService);
    });

    describe('getAnProsesManual$', () => {
        it('should return Observable<AnProsesManual>', () => {
            anProsesManualService.getAnProsesManual$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
