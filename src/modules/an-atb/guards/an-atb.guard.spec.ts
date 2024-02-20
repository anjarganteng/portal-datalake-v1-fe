import { TestBed } from '@angular/core/testing';

import { AnAtbGuard } from './an-atb.guard';

describe('_Template Module Guards', () => {
    let anAtbGuard: AnAtbGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnAtbGuard],
        });
        anAtbGuard = TestBed.inject(AnAtbGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anAtbGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
