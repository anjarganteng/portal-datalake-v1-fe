import { TestBed } from '@angular/core/testing';

import { AnNoAgunanService } from './an-no-agunan.service';

describe('AnNoAgunanService', () => {
    let anNoAgunanService: AnNoAgunanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnNoAgunanService],
        });
        anNoAgunanService = TestBed.inject(AnNoAgunanService);
    });

    describe('getAnNoAgunan$', () => {
        it('should return Observable<AnNoAgunan>', () => {
            anNoAgunanService.getAnNoAgunan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
