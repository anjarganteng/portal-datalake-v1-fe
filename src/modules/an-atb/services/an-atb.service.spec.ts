import { TestBed } from '@angular/core/testing';

import { AnAtbService } from './an-atb.service';

describe('AnAtbService', () => {
    let anAtbService: AnAtbService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnAtbService],
        });
        anAtbService = TestBed.inject(AnAtbService);
    });

    describe('getAnAtb$', () => {
        it('should return Observable<AnAtb>', () => {
            anAtbService.getAnAtb$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
