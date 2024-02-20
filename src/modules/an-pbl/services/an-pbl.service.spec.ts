import { TestBed } from '@angular/core/testing';

import { AnPblService } from './an-pbl.service';

describe('AnPblService', () => {
    let anPblService: AnPblService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPblService],
        });
        anPblService = TestBed.inject(AnPblService);
    });

    describe('getAnPbl$', () => {
        it('should return Observable<AnPbl>', () => {
            anPblService.getAnPbl$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
