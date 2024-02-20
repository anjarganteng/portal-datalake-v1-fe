import { TestBed } from '@angular/core/testing';

import { AnRegeneratelogService } from './an-regeneratelog.service';

describe('AnRegeneratelogService', () => {
    let anRegeneratelogService: AnRegeneratelogService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnRegeneratelogService],
        });
        anRegeneratelogService = TestBed.inject(AnRegeneratelogService);
    });

    describe('getAnRegeneratelog$', () => {
        it('should return Observable<AnRegeneratelog>', () => {
            anRegeneratelogService.getAnRegeneratelog$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
