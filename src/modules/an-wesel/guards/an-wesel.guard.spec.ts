import { TestBed } from '@angular/core/testing';

import { AnWeselGuard } from './an-wesel.guard';

describe('_Template Module Guards', () => {
    let anWeselGuard: AnWeselGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnWeselGuard],
        });
        anWeselGuard = TestBed.inject(AnWeselGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anWeselGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
