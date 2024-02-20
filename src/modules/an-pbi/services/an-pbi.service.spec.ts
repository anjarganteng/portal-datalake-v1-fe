import { TestBed } from '@angular/core/testing';

import { AnPbiService } from './an-pbi.service';

describe('AnPbiService', () => {
    let anPbiService: AnPbiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPbiService],
        });
        anPbiService = TestBed.inject(AnPbiService);
    });

    describe('getAnPbi$', () => {
        it('should return Observable<AnPbi>', () => {
            anPbiService.getAnPbi$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
