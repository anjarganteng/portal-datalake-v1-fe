import { TestBed } from '@angular/core/testing';

import { AnSlikAgunanLamaGuard } from './an-slik-agunan-lama.guard';

describe('_Template Module Guards', () => {
    let anSlikAgunanLamaGuard: AnSlikAgunanLamaGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnSlikAgunanLamaGuard],
        });
        anSlikAgunanLamaGuard = TestBed.inject(AnSlikAgunanLamaGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anSlikAgunanLamaGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
