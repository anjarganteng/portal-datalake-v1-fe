import { TestBed } from '@angular/core/testing';

import { AnRegeneratelogGuard } from './an-regeneratelog.guard';

describe('_Template Module Guards', () => {
    let anRegeneratelogGuard: AnRegeneratelogGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnRegeneratelogGuard],
        });
        anRegeneratelogGuard = TestBed.inject(AnRegeneratelogGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anRegeneratelogGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
