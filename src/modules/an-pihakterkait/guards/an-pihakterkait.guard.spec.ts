import { TestBed } from '@angular/core/testing';

import { AnPihakterkaitGuard } from './an-pihakterkait.guard';

describe('_Template Module Guards', () => {
    let anPihakterkaitGuard: AnPihakterkaitGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPihakterkaitGuard],
        });
        anPihakterkaitGuard = TestBed.inject(AnPihakterkaitGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPihakterkaitGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
