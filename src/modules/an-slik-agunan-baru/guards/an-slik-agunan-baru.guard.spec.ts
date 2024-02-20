import { TestBed } from '@angular/core/testing';

import { AnSlikAgunanBaruGuard } from './an-slik-agunan-baru.guard';

describe('_Template Module Guards', () => {
    let anSlikAgunanBaruGuard: AnSlikAgunanBaruGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnSlikAgunanBaruGuard],
        });
        anSlikAgunanBaruGuard = TestBed.inject(AnSlikAgunanBaruGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anSlikAgunanBaruGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
