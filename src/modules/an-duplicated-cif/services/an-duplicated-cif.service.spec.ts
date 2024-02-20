import { TestBed } from '@angular/core/testing';

import { AnDuplicatedCifService } from './an-duplicated-cif.service';

describe('AnDuplicatedCifService', () => {
    let anDuplicatedCifService: AnDuplicatedCifService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnDuplicatedCifService],
        });
        anDuplicatedCifService = TestBed.inject(AnDuplicatedCifService);
    });

    describe('getAnDuplicatedCif$', () => {
        it('should return Observable<AnDuplicatedCif>', () => {
            anDuplicatedCifService.getAnDuplicatedCif$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
