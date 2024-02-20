import { TestBed } from '@angular/core/testing';

import { AnNoAgunanGuard } from './an-no-agunan.guard';

describe('_Template Module Guards', () => {
    let anNoAgunanGuard: AnNoAgunanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnNoAgunanGuard],
        });
        anNoAgunanGuard = TestBed.inject(AnNoAgunanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anNoAgunanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
