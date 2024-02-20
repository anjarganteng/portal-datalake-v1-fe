import { TestBed } from '@angular/core/testing';

import { AnPpaGuard } from './an-ppa.guard';

describe('_Template Module Guards', () => {
    let anPpaGuard: AnPpaGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPpaGuard],
        });
        anPpaGuard = TestBed.inject(AnPpaGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPpaGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
