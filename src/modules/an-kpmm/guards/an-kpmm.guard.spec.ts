import { TestBed } from '@angular/core/testing';

import { AnKpmmGuard } from './an-kpmm.guard';

describe('_Template Module Guards', () => {
    let anKpmmGuard: AnKpmmGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnKpmmGuard],
        });
        anKpmmGuard = TestBed.inject(AnKpmmGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anKpmmGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
