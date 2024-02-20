import { TestBed } from '@angular/core/testing';

import { AnProsesPortalDatalakeGuard } from './an-proses-portal-datalake.guard';

describe('_Template Module Guards', () => {
    let anProsesPortalDatalakeGuard: AnProsesPortalDatalakeGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnProsesPortalDatalakeGuard],
        });
        anProsesPortalDatalakeGuard = TestBed.inject(AnProsesPortalDatalakeGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anProsesPortalDatalakeGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
