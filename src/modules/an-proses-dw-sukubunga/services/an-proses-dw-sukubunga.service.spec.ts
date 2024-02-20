import { TestBed } from '@angular/core/testing';

import { AnProsesDwSukubungaService } from './an-proses-dw-sukubunga.service';

describe('AnProsesDwSukubungaService', () => {
    let anProsesDwSukubungaService: AnProsesDwSukubungaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnProsesDwSukubungaService],
        });
        anProsesDwSukubungaService = TestBed.inject(AnProsesDwSukubungaService);
    });

    describe('getAnProsesDwSukubunga$', () => {
        it('should return Observable<AnProsesDwSukubunga>', () => {
            anProsesDwSukubungaService.getAnProsesDwSukubunga$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
