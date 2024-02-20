import { TestBed } from '@angular/core/testing';

import { AnAsetlainnyaGuard } from './an-asetlainnya.guard';

describe('_Template Module Guards', () => {
    let anAsetlainnyaGuard: AnAsetlainnyaGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnAsetlainnyaGuard],
        });
        anAsetlainnyaGuard = TestBed.inject(AnAsetlainnyaGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anAsetlainnyaGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
