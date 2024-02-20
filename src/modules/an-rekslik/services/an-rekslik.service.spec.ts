import { TestBed } from '@angular/core/testing';

import { AnRekslikService } from './an-rekslik.service';

describe('AnRekslikService', () => {
    let anRekslikService: AnRekslikService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnRekslikService],
        });
        anRekslikService = TestBed.inject(AnRekslikService);
    });

    describe('getAnRekslik$', () => {
        it('should return Observable<AnRekslik>', () => {
            anRekslikService.getAnRekslik$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
