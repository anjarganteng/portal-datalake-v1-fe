import { TestBed } from '@angular/core/testing';

import { AnCoaGuard } from './an-coa.guard';

describe('_Template Module Guards', () => {
    let anCoaGuard: AnCoaGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnCoaGuard],
        });
        anCoaGuard = TestBed.inject(AnCoaGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anCoaGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
