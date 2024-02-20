import { TestBed } from '@angular/core/testing';

import { AnAtmGuard } from './an-atm.guard';

describe('_Template Module Guards', () => {
    let anAtmGuard: AnAtmGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnAtmGuard],
        });
        anAtmGuard = TestBed.inject(AnAtmGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anAtmGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
