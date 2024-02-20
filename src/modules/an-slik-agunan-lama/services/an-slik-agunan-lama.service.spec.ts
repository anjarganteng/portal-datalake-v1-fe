import { TestBed } from '@angular/core/testing';

import { AnSlikAgunanLamaService } from './an-slik-agunan-lama.service';

describe('AnSlikAgunanLamaService', () => {
    let anSlikAgunanLamaService: AnSlikAgunanLamaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnSlikAgunanLamaService],
        });
        anSlikAgunanLamaService = TestBed.inject(AnSlikAgunanLamaService);
    });

    describe('getAnSlikAgunanLama$', () => {
        it('should return Observable<AnSlikAgunanLama>', () => {
            anSlikAgunanLamaService.getAnSlikAgunanLama$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
