import { TestBed } from '@angular/core/testing';

import { AnRefantasenaGuard } from './an-refantasena.guard';

describe('_Template Module Guards', () => {
    let anRefantasenaGuard: AnRefantasenaGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnRefantasenaGuard],
        });
        anRefantasenaGuard = TestBed.inject(AnRefantasenaGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anRefantasenaGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
