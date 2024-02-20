import { TestBed } from '@angular/core/testing';

import { AnAsetlainnyaService } from './an-asetlainnya.service';

describe('AnAsetlainnyaService', () => {
    let anAsetlainnyaService: AnAsetlainnyaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnAsetlainnyaService],
        });
        anAsetlainnyaService = TestBed.inject(AnAsetlainnyaService);
    });

    describe('getAnAsetlainnya$', () => {
        it('should return Observable<AnAsetlainnya>', () => {
            anAsetlainnyaService.getAnAsetlainnya$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
