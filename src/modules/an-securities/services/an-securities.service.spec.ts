import { TestBed } from '@angular/core/testing';

import { AnSecuritiesService } from './an-securities.service';

describe('AnSecuritiesService', () => {
    let anSecuritiesService: AnSecuritiesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnSecuritiesService],
        });
        anSecuritiesService = TestBed.inject(AnSecuritiesService);
    });

    describe('getAnSecurities$', () => {
        it('should return Observable<AnSecurities>', () => {
            anSecuritiesService.getAnSecurities$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
