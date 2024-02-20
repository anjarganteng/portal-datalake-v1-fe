import { TestBed } from '@angular/core/testing';

import { AnMasterCifGuard } from './an-master-cif.guard';

describe('_Template Module Guards', () => {
    let anMasterCifGuard: AnMasterCifGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnMasterCifGuard],
        });
        anMasterCifGuard = TestBed.inject(AnMasterCifGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anMasterCifGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
