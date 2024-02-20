import { TestBed } from '@angular/core/testing';

import { AnCoaService } from './an-coa.service';

describe('AnCoaService', () => {
    let anCoaService: AnCoaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnCoaService],
        });
        anCoaService = TestBed.inject(AnCoaService);
    });

    describe('getAnCoa$', () => {
        it('should return Observable<AnCoa>', () => {
            anCoaService.getAnCoa$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
