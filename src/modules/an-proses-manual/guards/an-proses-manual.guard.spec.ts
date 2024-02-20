import { TestBed } from '@angular/core/testing';

import { AnProsesManualGuard } from './an-proses-manual.guard';

describe('_Template Module Guards', () => {
    let anProsesManualGuard: AnProsesManualGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnProsesManualGuard],
        });
        anProsesManualGuard = TestBed.inject(AnProsesManualGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anProsesManualGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
