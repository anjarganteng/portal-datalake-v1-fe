import { TestBed } from '@angular/core/testing';

import { AnGolpemilikGuard } from './an-golpemilik.guard';

describe('_Template Module Guards', () => {
    let anGolpemilikGuard: AnGolpemilikGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnGolpemilikGuard],
        });
        anGolpemilikGuard = TestBed.inject(AnGolpemilikGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anGolpemilikGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
