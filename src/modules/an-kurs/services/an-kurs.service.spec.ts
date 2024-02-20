import { TestBed } from '@angular/core/testing';

import { AnKursService } from './an-kurs.service';

describe('AnKursService', () => {
    let anKursService: AnKursService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnKursService],
        });
        anKursService = TestBed.inject(AnKursService);
    });

    describe('getAnKurs$', () => {
        it('should return Observable<AnKurs>', () => {
            anKursService.getAnKurs$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
