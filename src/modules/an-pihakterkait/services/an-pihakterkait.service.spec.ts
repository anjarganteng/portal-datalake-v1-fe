import { TestBed } from '@angular/core/testing';

import { AnPihakterkaitService } from './an-pihakterkait.service';

describe('AnPihakterkaitService', () => {
    let anPihakterkaitService: AnPihakterkaitService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPihakterkaitService],
        });
        anPihakterkaitService = TestBed.inject(AnPihakterkaitService);
    });

    describe('getAnPihakterkait$', () => {
        it('should return Observable<AnPihakterkait>', () => {
            anPihakterkaitService.getAnPihakterkait$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
