import { TestBed } from '@angular/core/testing';

import { AnHapusbukuService } from './an-hapusbuku.service';

describe('AnHapusbukuService', () => {
    let anHapusbukuService: AnHapusbukuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnHapusbukuService],
        });
        anHapusbukuService = TestBed.inject(AnHapusbukuService);
    });

    describe('getAnHapusbuku$', () => {
        it('should return Observable<AnHapusbuku>', () => {
            anHapusbukuService.getAnHapusbuku$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
