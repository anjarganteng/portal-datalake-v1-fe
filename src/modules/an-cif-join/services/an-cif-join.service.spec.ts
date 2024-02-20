import { TestBed } from '@angular/core/testing';

import { AnCifJoinService } from './an-cif-join.service';

describe('AnCifJoinService', () => {
    let anCifJoinService: AnCifJoinService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnCifJoinService],
        });
        anCifJoinService = TestBed.inject(AnCifJoinService);
    });

    describe('getAnCifJoin$', () => {
        it('should return Observable<AnCifJoin>', () => {
            anCifJoinService.getAnCifJoin$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
