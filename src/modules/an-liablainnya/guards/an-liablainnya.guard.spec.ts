import { TestBed } from '@angular/core/testing';

import { AnLiablainnyaGuard } from './an-liablainnya.guard';

describe('_Template Module Guards', () => {
    let anLiablainnyaGuard: AnLiablainnyaGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnLiablainnyaGuard],
        });
        anLiablainnyaGuard = TestBed.inject(AnLiablainnyaGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anLiablainnyaGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
