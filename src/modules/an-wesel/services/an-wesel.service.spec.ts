import { TestBed } from '@angular/core/testing';

import { AnWeselService } from './an-wesel.service';

describe('AnWeselService', () => {
    let anWeselService: AnWeselService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnWeselService],
        });
        anWeselService = TestBed.inject(AnWeselService);
    });

    describe('getAnWesel$', () => {
        it('should return Observable<AnWesel>', () => {
            anWeselService.getAnWesel$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
