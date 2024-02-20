import { TestBed } from '@angular/core/testing';

import { AnProsesDwSukubungaGuard } from './an-proses-dw-sukubunga.guard';

describe('_Template Module Guards', () => {
    let anProsesDwSukubungaGuard: AnProsesDwSukubungaGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnProsesDwSukubungaGuard],
        });
        anProsesDwSukubungaGuard = TestBed.inject(AnProsesDwSukubungaGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anProsesDwSukubungaGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
