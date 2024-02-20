import { TestBed } from '@angular/core/testing';

import { AnMappingNcdGuard } from './an-mapping-ncd.guard';

describe('_Template Module Guards', () => {
    let anMappingNcdGuard: AnMappingNcdGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnMappingNcdGuard],
        });
        anMappingNcdGuard = TestBed.inject(AnMappingNcdGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anMappingNcdGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
