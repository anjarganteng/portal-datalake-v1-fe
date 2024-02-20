import { TestBed } from '@angular/core/testing';

import { AnMdrGuard } from './an-mdr.guard';

describe('_Template Module Guards', () => {
    let anMdrGuard: AnMdrGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnMdrGuard],
        });
        anMdrGuard = TestBed.inject(AnMdrGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anMdrGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
