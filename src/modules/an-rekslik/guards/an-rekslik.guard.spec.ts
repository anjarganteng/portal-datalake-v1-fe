import { TestBed } from '@angular/core/testing';

import { AnRekslikGuard } from './an-rekslik.guard';

describe('_Template Module Guards', () => {
    let anRekslikGuard: AnRekslikGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnRekslikGuard],
        });
        anRekslikGuard = TestBed.inject(AnRekslikGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anRekslikGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
