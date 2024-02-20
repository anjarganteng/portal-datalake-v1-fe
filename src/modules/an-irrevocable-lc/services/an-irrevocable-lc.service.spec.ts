import { TestBed } from '@angular/core/testing';

import { AnIrrevocableLcService } from './an-irrevocable-lc.service';

describe('AnIrrevocableLcService', () => {
    let anIrrevocableLcService: AnIrrevocableLcService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnIrrevocableLcService],
        });
        anIrrevocableLcService = TestBed.inject(AnIrrevocableLcService);
    });

    describe('getAnIrrevocableLc$', () => {
        it('should return Observable<AnIrrevocableLc>', () => {
            anIrrevocableLcService.getAnIrrevocableLc$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
