import { TestBed } from '@angular/core/testing';

import { AnMasterQqGuard } from './an-master-qq.guard';

describe('_Template Module Guards', () => {
    let anMasterQqGuard: AnMasterQqGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnMasterQqGuard],
        });
        anMasterQqGuard = TestBed.inject(AnMasterQqGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anMasterQqGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
