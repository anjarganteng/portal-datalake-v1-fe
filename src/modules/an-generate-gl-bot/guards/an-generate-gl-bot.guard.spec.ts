import { TestBed } from '@angular/core/testing';

import { AnGenerateGlBotGuard } from './an-generate-gl-bot.guard';

describe('_Template Module Guards', () => {
    let anGenerateGlBotGuard: AnGenerateGlBotGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnGenerateGlBotGuard],
        });
        anGenerateGlBotGuard = TestBed.inject(AnGenerateGlBotGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anGenerateGlBotGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
