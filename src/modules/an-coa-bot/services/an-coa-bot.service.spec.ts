import { TestBed } from '@angular/core/testing';

import { AnCoaBotService } from './an-coa-bot.service';

describe('AnCoaBotService', () => {
    let anCoaBotService: AnCoaBotService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnCoaBotService],
        });
        anCoaBotService = TestBed.inject(AnCoaBotService);
    });

    describe('getAnCoaBot$', () => {
        it('should return Observable<AnCoaBot>', () => {
            anCoaBotService.getAnCoaBot$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
