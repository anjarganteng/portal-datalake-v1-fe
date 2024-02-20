import { TestBed } from '@angular/core/testing';

import { AnKpmmService } from './an-kpmm.service';

describe('AnKpmmService', () => {
    let anKpmmService: AnKpmmService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnKpmmService],
        });
        anKpmmService = TestBed.inject(AnKpmmService);
    });

    describe('getAnKpmm$', () => {
        it('should return Observable<AnKpmm>', () => {
            anKpmmService.getAnKpmm$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
