import { TestBed } from '@angular/core/testing';

import { AnPemegangkuasaGuard } from './an-pemegangkuasa.guard';

describe('_Template Module Guards', () => {
    let anPemegangkuasaGuard: AnPemegangkuasaGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPemegangkuasaGuard],
        });
        anPemegangkuasaGuard = TestBed.inject(AnPemegangkuasaGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPemegangkuasaGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
