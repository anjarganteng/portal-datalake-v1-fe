import { TestBed } from '@angular/core/testing';

import { AnDuplicatedCifGuard } from './an-duplicated-cif.guard';

describe('_Template Module Guards', () => {
    let anDuplicatedCifGuard: AnDuplicatedCifGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnDuplicatedCifGuard],
        });
        anDuplicatedCifGuard = TestBed.inject(AnDuplicatedCifGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anDuplicatedCifGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
