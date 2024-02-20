import { TestBed } from '@angular/core/testing';

import { AnCifJoinGuard } from './an-cif-join.guard';

describe('_Template Module Guards', () => {
    let anCifJoinGuard: AnCifJoinGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnCifJoinGuard],
        });
        anCifJoinGuard = TestBed.inject(AnCifJoinGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anCifJoinGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
