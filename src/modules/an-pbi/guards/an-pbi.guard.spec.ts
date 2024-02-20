import { TestBed } from '@angular/core/testing';

import { AnPbiGuard } from './an-pbi.guard';

describe('_Template Module Guards', () => {
    let anPbiGuard: AnPbiGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPbiGuard],
        });
        anPbiGuard = TestBed.inject(AnPbiGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPbiGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
