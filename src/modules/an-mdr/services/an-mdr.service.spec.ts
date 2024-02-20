import { TestBed } from '@angular/core/testing';

import { AnMdrService } from './an-mdr.service';

describe('AnMdrService', () => {
    let anMdrService: AnMdrService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnMdrService],
        });
        anMdrService = TestBed.inject(AnMdrService);
    });

    describe('getAnMdr$', () => {
        it('should return Observable<AnMdr>', () => {
            anMdrService.getAnMdr$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
