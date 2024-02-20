import { TestBed } from '@angular/core/testing';

import { AnLiablainnyaService } from './an-liablainnya.service';

describe('AnLiablainnyaService', () => {
    let anLiablainnyaService: AnLiablainnyaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnLiablainnyaService],
        });
        anLiablainnyaService = TestBed.inject(AnLiablainnyaService);
    });

    describe('getAnLiablainnya$', () => {
        it('should return Observable<AnLiablainnya>', () => {
            anLiablainnyaService.getAnLiablainnya$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
