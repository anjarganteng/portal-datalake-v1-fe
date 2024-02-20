import { TestBed } from '@angular/core/testing';

import { AnPpaService } from './an-ppa.service';

describe('AnPpaService', () => {
    let anPpaService: AnPpaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPpaService],
        });
        anPpaService = TestBed.inject(AnPpaService);
    });

    describe('getAnPpa$', () => {
        it('should return Observable<AnPpa>', () => {
            anPpaService.getAnPpa$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
