import { TestBed } from '@angular/core/testing';

import { AnCifToFiGuard } from './an-cif-to-fi.guard';

describe('_Template Module Guards', () => {
    let anCifToFiGuard: AnCifToFiGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnCifToFiGuard],
        });
        anCifToFiGuard = TestBed.inject(AnCifToFiGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anCifToFiGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
