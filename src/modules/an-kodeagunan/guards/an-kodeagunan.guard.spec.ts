import { TestBed } from '@angular/core/testing';

import { AnKodeagunanGuard } from './an-kodeagunan.guard';

describe('_Template Module Guards', () => {
    let anKodeagunanGuard: AnKodeagunanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnKodeagunanGuard],
        });
        anKodeagunanGuard = TestBed.inject(AnKodeagunanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anKodeagunanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
