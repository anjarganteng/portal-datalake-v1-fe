import { TestBed } from '@angular/core/testing';

import { AnMappingNcdService } from './an-mapping-ncd.service';

describe('AnMappingNcdService', () => {
    let anMappingNcdService: AnMappingNcdService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnMappingNcdService],
        });
        anMappingNcdService = TestBed.inject(AnMappingNcdService);
    });

    describe('getAnMappingNcd$', () => {
        it('should return Observable<AnMappingNcd>', () => {
            anMappingNcdService.getAnMappingNcd$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
