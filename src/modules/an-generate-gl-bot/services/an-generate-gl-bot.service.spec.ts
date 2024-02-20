import { TestBed } from '@angular/core/testing';

import { AnGenerateGlBotService } from './an-generate-gl-bot.service';

describe('AnGenerateGlBotService', () => {
    let anGenerateGlBotService: AnGenerateGlBotService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnGenerateGlBotService],
        });
        anGenerateGlBotService = TestBed.inject(AnGenerateGlBotService);
    });

    describe('getAnGenerateGlBot$', () => {
        it('should return Observable<AnGenerateGlBot>', () => {
            anGenerateGlBotService.getAnGenerateGlBot$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
