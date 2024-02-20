import { TestBed } from '@angular/core/testing';

import { AnRekdikecualikanGuard } from './an-rekdikecualikan.guard';

describe('_Template Module Guards', () => {
    let anRekdikecualikanGuard: AnRekdikecualikanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnRekdikecualikanGuard],
        });
        anRekdikecualikanGuard = TestBed.inject(AnRekdikecualikanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anRekdikecualikanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
