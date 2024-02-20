import { TestBed } from '@angular/core/testing';

import { AnCifdikecualikanService } from './an-cifdikecualikan.service';

describe('AnCifdikecualikanService', () => {
    let anCifdikecualikanService: AnCifdikecualikanService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnCifdikecualikanService],
        });
        anCifdikecualikanService = TestBed.inject(AnCifdikecualikanService);
    });

    describe('getAnCifdikecualikan$', () => {
        it('should return Observable<AnCifdikecualikan>', () => {
            anCifdikecualikanService.getAnCifdikecualikan$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
