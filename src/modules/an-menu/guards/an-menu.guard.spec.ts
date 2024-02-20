import { TestBed } from '@angular/core/testing';

import { AnMenuGuard } from './an-menu.guard';

describe('_Template Module Guards', () => {
    let anMenuGuard: AnMenuGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnMenuGuard],
        });
        anMenuGuard = TestBed.inject(AnMenuGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anMenuGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
