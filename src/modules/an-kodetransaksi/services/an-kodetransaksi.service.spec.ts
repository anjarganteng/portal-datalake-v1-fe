import { TestBed } from '@angular/core/testing';

import { AnKodetransaksiService } from './an-kodetransaksi.service';

describe('AnKodetransaksiService', () => {
    let anKodetransaksiService: AnKodetransaksiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnKodetransaksiService],
        });
        anKodetransaksiService = TestBed.inject(AnKodetransaksiService);
    });

    describe('getAnKodetransaksi$', () => {
        it('should return Observable<AnKodetransaksi>', () => {
            anKodetransaksiService.getAnKodetransaksi$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
