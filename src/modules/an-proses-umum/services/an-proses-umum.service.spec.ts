import { TestBed } from '@angular/core/testing';

import { AnProsesUmumService } from './an-proses-umum.service';

describe('AnProsesUmumService', () => {
    let anProsesUmumService: AnProsesUmumService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnProsesUmumService],
        });
        anProsesUmumService = TestBed.inject(AnProsesUmumService);
    });

    describe('getAnProsesUmum$', () => {
        it('should return Observable<AnProsesUmum>', () => {
            anProsesUmumService.getAnProsesUmum$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
