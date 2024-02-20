import { TestBed } from '@angular/core/testing';

import { AnCoaBotGuard } from './an-coa-bot.guard';

describe('_Template Module Guards', () => {
    let anCoaBotGuard: AnCoaBotGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnCoaBotGuard],
        });
        anCoaBotGuard = TestBed.inject(AnCoaBotGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anCoaBotGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
