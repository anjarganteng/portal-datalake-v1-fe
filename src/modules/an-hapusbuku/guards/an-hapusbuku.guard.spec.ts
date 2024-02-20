import { TestBed } from '@angular/core/testing';

import { AnHapusbukuGuard } from './an-hapusbuku.guard';

describe('_Template Module Guards', () => {
    let anHapusbukuGuard: AnHapusbukuGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnHapusbukuGuard],
        });
        anHapusbukuGuard = TestBed.inject(AnHapusbukuGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anHapusbukuGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
