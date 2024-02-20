import { TestBed } from '@angular/core/testing';

import { AnAtmService } from './an-atm.service';

describe('AnAtmService', () => {
    let anAtmService: AnAtmService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnAtmService],
        });
        anAtmService = TestBed.inject(AnAtmService);
    });

    describe('getAnAtm$', () => {
        it('should return Observable<AnAtm>', () => {
            anAtmService.getAnAtm$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
