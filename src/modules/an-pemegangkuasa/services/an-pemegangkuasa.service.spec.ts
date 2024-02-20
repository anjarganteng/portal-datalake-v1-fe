import { TestBed } from '@angular/core/testing';

import { AnPemegangkuasaService } from './an-pemegangkuasa.service';

describe('AnPemegangkuasaService', () => {
    let anPemegangkuasaService: AnPemegangkuasaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPemegangkuasaService],
        });
        anPemegangkuasaService = TestBed.inject(AnPemegangkuasaService);
    });

    describe('getAnPemegangkuasa$', () => {
        it('should return Observable<AnPemegangkuasa>', () => {
            anPemegangkuasaService.getAnPemegangkuasa$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
