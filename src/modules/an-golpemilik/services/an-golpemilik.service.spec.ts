import { TestBed } from '@angular/core/testing';

import { AnGolpemilikService } from './an-golpemilik.service';

describe('AnGolpemilikService', () => {
    let anGolpemilikService: AnGolpemilikService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnGolpemilikService],
        });
        anGolpemilikService = TestBed.inject(AnGolpemilikService);
    });

    describe('getAnGolpemilik$', () => {
        it('should return Observable<AnGolpemilik>', () => {
            anGolpemilikService.getAnGolpemilik$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
