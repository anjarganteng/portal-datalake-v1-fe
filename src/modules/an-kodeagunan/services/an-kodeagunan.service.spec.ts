import { TestBed } from '@angular/core/testing';

import { AnKodeagunanService } from './an-kodeagunan.service';

describe('AnKodeagunanService', () => {
    let anKodeagunanService: AnKodeagunanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnKodeagunanService],
        });
        anKodeagunanService = TestBed.inject(AnKodeagunanService);
    });

    describe('getAnKodeagunan$', () => {
        it('should return Observable<AnKodeagunan>', () => {
            anKodeagunanService.getAnKodeagunan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
