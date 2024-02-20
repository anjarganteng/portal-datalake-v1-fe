import { TestBed } from '@angular/core/testing';

import { AnSlikAgunanBaruService } from './an-slik-agunan-baru.service';

describe('AnSlikAgunanBaruService', () => {
    let anSlikAgunanBaruService: AnSlikAgunanBaruService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnSlikAgunanBaruService],
        });
        anSlikAgunanBaruService = TestBed.inject(AnSlikAgunanBaruService);
    });

    describe('getAnSlikAgunanBaru$', () => {
        it('should return Observable<AnSlikAgunanBaru>', () => {
            anSlikAgunanBaruService.getAnSlikAgunanBaru$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
