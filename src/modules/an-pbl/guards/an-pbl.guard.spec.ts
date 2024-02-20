import { TestBed } from '@angular/core/testing';

import { AnPblGuard } from './an-pbl.guard';

describe('_Template Module Guards', () => {
    let anPblGuard: AnPblGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPblGuard],
        });
        anPblGuard = TestBed.inject(AnPblGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPblGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
