import { TestBed } from '@angular/core/testing';

import { AnMenuService } from './an-menu.service';

describe('AnMenuService', () => {
    let anMenuService: AnMenuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnMenuService],
        });
        anMenuService = TestBed.inject(AnMenuService);
    });

    describe('getAnMenu$', () => {
        it('should return Observable<AnMenu>', () => {
            anMenuService.getAnMenu$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
