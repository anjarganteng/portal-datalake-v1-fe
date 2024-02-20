import { TestBed } from '@angular/core/testing';

import { AnSecuritiesGuard } from './an-securities.guard';

describe('_Template Module Guards', () => {
    let anSecuritiesGuard: AnSecuritiesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnSecuritiesGuard],
        });
        anSecuritiesGuard = TestBed.inject(AnSecuritiesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anSecuritiesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
